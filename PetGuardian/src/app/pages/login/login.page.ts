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
  login() {
    this.servicioLogin.login(this.credentials).subscribe(
      (response) => {
        console.log('Login success:', response);
        this.servicioLogin.saveLoginData(response);  // Guarda los datos del login
        this.router.navigate(['/home']);  // Redirige al home
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
