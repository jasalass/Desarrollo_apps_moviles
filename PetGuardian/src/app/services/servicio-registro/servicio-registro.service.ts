import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';  // Asegúrate de usar la ruta correcta

@Injectable({
  providedIn: 'root'
})
export class ServicioRegistroService {
  private supabaseUrl = environment.supabaseUrl;  // URL de Supabase
  private supabaseKey = environment.supabaseKey;  // Clave API de Supabase
  private headers = new HttpHeaders().set('apikey', this.supabaseKey).set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Método para registrar un usuario en Supabase
  signUp(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.supabaseUrl}/auth/v1/signup`, body, { headers: this.headers });
  }
}
