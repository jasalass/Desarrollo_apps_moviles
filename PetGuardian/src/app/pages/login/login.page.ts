import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  // Definir las propiedades para email y password
  email: string = '';
  password: string = '';

  constructor() {}

  // Método login que se activará cuando el formulario se envíe
  login() {
    console.log('Iniciar sesión con:', this.email, this.password);
    // Aquí puedes añadir la lógica de autenticación
  }
}
