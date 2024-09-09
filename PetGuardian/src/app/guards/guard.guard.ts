import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from '../services/guard.service'; // Importar el servicio de autenticación

export const guard: CanActivateFn = (route, state) => {
  const guardService = inject(GuardService);  // Inyectar el servicio de autenticación
  const router = inject(Router);  // Inyectar el enrutador

  if (guardService.comprobar_autenticado()) {
    return true;  // Permitir el acceso si el usuario está autenticado
  } else {
    router.navigate(['/login']);  // Redirigir al login si no está autenticado
    return false;  // Bloquear el acceso
  }
};
