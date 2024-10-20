import { Component, OnInit } from '@angular/core';
import { ServicioLoginService } from 'src/app/services/login/servicio-login.service';

@Component({
  selector: 'app-perfil-cuidador',
  templateUrl: './perfil-cuidador.page.html',
  styleUrls: ['./perfil-cuidador.page.scss'],
})
export class PerfilCuidadorPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  cuidador: boolean = false;

  constructor(private servicioLogin: ServicioLoginService) {}

  async ngOnInit() {
    // Obtener los datos del usuario desde el servicio de login
    const userData = await this.servicioLogin.getUserData();
    if (userData) {
      this.nombre = userData.nombre;
      this.apellido = userData.apellido;
      this.cuidador = userData.cuidador === 'true';
    }
  }
}
