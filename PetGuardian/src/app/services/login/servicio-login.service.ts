import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  private supabaseUrl = environment.supabaseUrl;
  private supabaseKey = environment.supabaseKey;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': this.supabaseKey
    })
  };

  constructor(private http: HttpClient) { }

  // Método para hacer login
  login(credentials: { email: string; password: string }): Observable<any> {
    const url = `${this.supabaseUrl}/auth/v1/token?grant_type=password`;
    return this.http.post(url, credentials, this.httpOptions);
  }

  // Método para guardar datos relevantes después del login
  saveLoginData(response: any): void {
    // Almacena el token JWT y otros datos relevantes
    localStorage.setItem('accessToken', response.access_token);  // Guarda el token
    localStorage.setItem('userId', response.user.id);  // Guarda el ID del usuario
    localStorage.setItem('userRole', response.user.role);  // Guarda el rol del usuario (si existe)
  }

  // Método para obtener los datos del usuario guardados
  getUserData(): any {
    return {
      accessToken: localStorage.getItem('accessToken'),
      userId: localStorage.getItem('userId'),
      userRole: localStorage.getItem('userRole')
    };
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
  }
}
