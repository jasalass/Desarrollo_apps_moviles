import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor() { }

  //comprueba que exista el token en localstorage, el cual se crea cuando el usuario se loguea
  comprobar_autenticado(): boolean{
    const token = localStorage.getItem('access_token_petguard')
    return !!token // Si hay token, devuelve true; de lo contrario, false
  }
  
  logout_guard() {
    localStorage.removeItem('access_token');
  }
}
