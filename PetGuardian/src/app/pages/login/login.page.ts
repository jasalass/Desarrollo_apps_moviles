import { Component } from '@angular/core';
import { ServicioLoginService } from 'src/app/services/login/servicio-login.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CredencialesModalComponent } from '../../modals/modal-login/credenciales-modal/credenciales-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  credentials = {
    email: '',
    password: ''
  };

  constructor(
    private servicioLogin: ServicioLoginService,
    private router: Router,
    private modalController: ModalController
  ) {}

  // Método para realizar el login
  async login() {
    this.servicioLogin.login(this.credentials).subscribe(
      async (response) => {
        // Guarda los datos del login en Ionic Storage
        await this.servicioLogin.saveLoginData({
          access_token: response.access_token,
          user: response.user
        });

        // Espera a que los datos estén completamente guardados
        const userData = await this.servicioLogin.getUserData();
        console.log('Datos del usuario obtenidos después del login:', userData);

        // Verifica si el usuario es cuidador o dueño
        const isCuidador = userData.cuidador === 'true' || userData.cuidador === true;
        const isDueno = userData.dueno === 'true' || userData.dueno === true;

        // Redirigir y recargar la página
        if (isCuidador) {
          this.router.navigate(['/perfil-cuidador']).then(() => {
            window.location.reload();  // Recarga la página
          });
        } else if (isDueno) {
          this.router.navigate(['/perfil-dueno']).then(() => {
            window.location.reload();  // Recarga la página
          });
}
      },
      async (error) => {
        console.error('Login error:', error);
        // Muestra un modal en caso de error
        const modal = await this.modalController.create({
          component: CredencialesModalComponent,
          cssClass: 'credenciales-invalidas-modal',
        });
        return await modal.present();
      }
    );
  }
}
