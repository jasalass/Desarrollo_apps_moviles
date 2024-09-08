import { Component } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';
import { AlertController } from '@ionic/angular'; //Para mostrar alertas en pantalla

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  email: string = "";
  password: string = "";
  isCuidador: boolean = false;
  isDueno: boolean = false;

  constructor(private supabaseService: SupabaseService, private alerta: AlertController) {}

  async generarAlerta(head: string, mensaje: string) {
    const alert = await this.alerta.create({
      header: head,
      message: mensaje,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  

  async onRegister() {
    try {
      // Registrar el usuario en Supabase
      const userData = await this.supabaseService.insertUser(this.email, this.password);

      if (userData && userData.user && userData.user.id) {  // Verificar si userData y userId no son undefined
        console.log('Usuario registrado exitosamente:', userData);

        const userId: string = userData.user.id;  //userId es de tipo string

        // Insertar el rol del usuario en la tabla user_roles
        const roleData = await this.supabaseService.insertUserRole(userId, this.isCuidador, this.isDueno);

        if (roleData) {
          
          this.generarAlerta('Éxito en registro', 'Usuario registrado');
        }
      } else {
        this.generarAlerta("Error en registro", "No se pudo registrar usuario, intente nuevamente")
      }
    } catch (error) {
      this.generarAlerta("Error en registro", "No se pudo registrar usuario, intente nuevamente")
    }
  }

  // Validación de los checkboxes, asegurando que al menos uno esté marcado
  isCheckboxValid(): boolean {
    return this.isCuidador || this.isDueno;
  }
}
