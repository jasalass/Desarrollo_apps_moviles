import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ServicioLoginService } from '../../../services/login/servicio-login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardDueno implements CanActivate {

  constructor(private authService: ServicioLoginService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const userData = await this.authService.getUserData();
    
    if (userData && userData.dueno === 'true') {
      return true;  // El usuario es dueño
    } else {
      this.router.navigate(['/home']);  // Si no es dueño, redirige a otra página
      return false;
    }
  }
}
