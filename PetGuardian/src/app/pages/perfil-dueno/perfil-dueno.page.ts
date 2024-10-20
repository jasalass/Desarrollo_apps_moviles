import { Component, OnInit } from '@angular/core';
import { ServicioLoginService } from 'src/app/services/login/servicio-login.service';

@Component({
  selector: 'app-perfil-dueno',
  templateUrl: './perfil-dueno.page.html',
  styleUrls: ['./perfil-dueno.page.scss'],
})
export class PerfilDuenoPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  dueno: boolean = false;

  constructor(private servicioLogin: ServicioLoginService) {}

  async ngOnInit() {
    // Obtener los datos del usuario desde el servicio de login
    const userData = await this.servicioLogin.getUserData();
    if (userData) {
      this.nombre = userData.nombre;
      this.apellido = userData.apellido;
      this.dueno = userData.dueno === 'true';
    }
  }
}
