import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';
import { AlertController } from '@ionic/angular'; //Para mostrar alertas en pantalla
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = "";
  password: string = "";

  constructor(
    private supabaseService: SupabaseService,
    private alerta: AlertController,
    private router: Router
    ) { }

  async ngOnInit() {
    
  }

  async loginUsuario() {
    try {
      // Verificar que email y password no estén vacíos
      if (!this.email || !this.password) {
        const alert = await this.alerta.create({
          header: 'Error',
          message: 'Por favor, ingresa tu correo y contraseña.',
          buttons: ['OK'],
        });
        await alert.present();
        return;
      }

      // Llamar al servicio para iniciar sesión
      const {data, error} = await this.supabaseService.signInUser(this.email, this.password);

      if (error) {
        if(error.message =='Invalid login credentials'){
          const alert = await this.alerta.create({
            header: 'Error',
            message: 'Credenciales inválidas, intente nuevamente',
            buttons: ['OK'],
          });
          await alert.present();
          return;
        }else if(error.message == 'Email not confirmed'){
          const alert = await this.alerta.create({
            header: 'Error',
            message: 'Email sin confirmar, revise su correo, también carpeta Spam',
            buttons: ['OK'],
          });
          await alert.present();
          return;
        } 
      }else if(!error){
        this.supabaseService.userRole(data);
      }

    } catch (error) {
      // Verificar si el error tiene la propiedad message
      let errorMessage = 'Ocurrió un error inesperado.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      // Mostrar alerta con el mensaje de error
      const alert = await this.alerta.create({
        header: 'Error al iniciar sesión',
        message: errorMessage,
        buttons: ['OK'],
      });
      await alert.present();
      console.log('Error al iniciar sesión:', error);  // Mostrar en consola para depuración
    }
  }
}
