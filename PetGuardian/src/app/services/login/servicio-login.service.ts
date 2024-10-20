import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';  // Importa Ionic Storage

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

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create();  // Inicializa Ionic Storage
  }

  // Método para hacer login
  login(credentials: { email: string; password: string }): Observable<any> {
    const url = `${this.supabaseUrl}/auth/v1/token?grant_type=password`;
    return this.http.post(url, credentials, this.httpOptions);
  }

  async saveLoginData(response: any): Promise<void> {
    const userId = response.user.id;
    await this.storage.set('accessToken', response.access_token);
    await this.storage.set('userId', userId);
  
    // Espera hasta que se guarden todos los datos antes de resolver la promesa
    return new Promise((resolve, reject) => {
      this.http.get(`${this.supabaseUrl}/rest/v1/user_roles?user_id=eq.${userId}`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'apikey': this.supabaseKey,
          'Authorization': `Bearer ${response.access_token}`
        })
      }).subscribe(
        async (userRolesResponse: any) => {
          if (userRolesResponse && userRolesResponse.length > 0) {
            const userRoles = userRolesResponse[0];
            await this.storage.set('userRole', userRoles.role || '');
            await this.storage.set('nombre', userRoles.pnombre || '');
            await this.storage.set('apellido', userRoles.apellido || '');
            await this.storage.set('cuidador', userRoles.cuidador !== undefined ? userRoles.cuidador.toString() : 'false');
            await this.storage.set('dueno', userRoles.dueno !== undefined ? userRoles.dueno.toString() : 'false');
            resolve();  // Resuelve la promesa una vez que los datos están guardados
          } else {
            reject('No se encontraron datos en la tabla user_roles');
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  


  async getUserData(): Promise<any> {
    const accessToken = await this.storage.get('accessToken');
    const userId = await this.storage.get('userId');
    const userRole = await this.storage.get('userRole');
    const nombre = await this.storage.get('nombre');
    const apellido = await this.storage.get('apellido');
    const cuidador = await this.storage.get('cuidador');
    const dueno = await this.storage.get('dueno');
    

    return { accessToken, userId, userRole, nombre, apellido, cuidador, dueno };
  }




  // Método para cerrar sesión y limpiar los datos en Ionic Storage
  async logout(): Promise<void> {
    await this.storage.clear();  // Limpia todos los datos almacenados
  }
}
