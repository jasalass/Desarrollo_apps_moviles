import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ServicioLoginService } from '../../services/login/servicio-login.service';  // Servicio de autenticación
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardAutenticacion implements CanActivate {

  constructor(private authService: ServicioLoginService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const userData = await this.authService.getUserData();
    if (userData && userData.accessToken) {  // Verifica si hay un token de acceso
      return true;  // Está autenticado
    } else {
      this.router.navigate(['/login']);  // Redirige al login si no está autenticado
      return false;
    }
  }
}
