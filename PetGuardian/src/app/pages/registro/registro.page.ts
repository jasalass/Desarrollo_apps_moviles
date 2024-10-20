import { Component } from '@angular/core';
import { ServicioRegistroService } from 'src/app/services/registro/servicio-registro.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RegistroErrorModalComponent } from '../../modals/registro-error-modal/registro-error-modal.component';  

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  user = {
    email: '',
    password: '',
    pnombre: '',
    apellido: '',
    cuidador: false,
    dueno: false
  };

  constructor(
    private servicioRegistro: ServicioRegistroService,
    private router: Router,
    private modalController: ModalController  // Inyecta el modal controller
  ) {}

  // Método para registrar usuario
  async register() {
    // Paso 1: Registrar al usuario en Supabase
    this.servicioRegistro.registerUser({ email: this.user.email, password: this.user.password }).subscribe(
      (response) => {
        console.log(response)
        const userId = response.id;

        // Paso 2: Insertar en la tabla user_roles
        this.servicioRegistro.insertUserRoles({
          user_id: userId,
          cuidador: this.user.cuidador,
          dueno: this.user.dueno,
          pnombre: this.user.pnombre,
          apellido: this.user.apellido
        }).subscribe(
          async (res) => {
            console.log('Usuario registrado correctamente:', res);
            await this.router.navigate(['/login']);  // Redirigir al login en caso de éxito
          },
          async (error) => {
            console.error('Error al insertar roles:', error);
            await this.showErrorModal("Hubo un problema al insertar los roles.");  // Mostrar modal si hay error en los roles
          }
        );
      },
      async (error) => {
        console.error('Error al registrar usuario:', error.error.msg);
        await this.showErrorModal("El usuario ya está registrado o hubo un problema con los datos.");  // Mostrar modal si hay error en el registro
      }
    );
  }

  // Método para mostrar un modal en caso de error
  async showErrorModal(errorMessage: string) {
    const modal = await this.modalController.create({
      component: RegistroErrorModalComponent,  // Usamos el nuevo componente modal
      componentProps: {
        errorMessage: errorMessage  // Pasamos el mensaje de error
      },
      cssClass: 'error-modal'
    });
    await modal.present();
  }
}
