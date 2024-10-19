import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioRegistroService {
  private supabaseUrl = environment.supabaseUrl;
  private supabaseKey = environment.supabaseKey;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': this.supabaseKey
    })
  };

  constructor(private http: HttpClient) {}

  // Método para registrar al usuario en Supabase (auth)
  registerUser(credentials: { email: string; password: string }): Observable<any> {
    const url = `${this.supabaseUrl}/auth/v1/signup`;
    return this.http.post(url, credentials, this.httpOptions);
  }

  // Método para agregar información a la tabla user_roles
  insertUserRoles(userData: { user_id: string; cuidador: boolean; dueno: boolean; pnombre: string; apellido: string }): Observable<any> {
    const url = `${this.supabaseUrl}/rest/v1/user_roles`;  // URL de la tabla en Supabase
    return this.http.post(url, userData, this.httpOptions);
  }
}
