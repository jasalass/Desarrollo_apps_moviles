import { Component } from '@angular/core';
import { ServicioRegistroService } from '../../services/servicio-registro/servicio-registro.service'; // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  email: string = '';
  password: string = '';

  constructor(private servicioRegistro: ServicioRegistroService, private router: Router) {}

  // Método para registrar el usuario
  register() {
    this.servicioRegistro.signUp(this.email, this.password).subscribe(
      (response) => {
        console.log('Registro exitoso', response);
        // Redirigir al login o página principal después del registro
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error en el registro', error);
      }
    );
  }
}
