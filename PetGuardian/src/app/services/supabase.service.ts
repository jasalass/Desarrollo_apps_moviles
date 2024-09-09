
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // Método para registrar un usuario
  async insertUser(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Error al insertar el usuario:', error.message);
      return null;
    }

    return data;
  }

  // Método para insertar el rol del usuario en la tabla user_roles
  async insertUserRole(userId: string, isCuidador: boolean, isDueno: boolean) {
    const { data, error } = await this.supabase
      .from('user_roles')
      .insert([{ user_id: userId, cuidador: isCuidador, dueno: isDueno }]);

    if (error) {
      console.error('Error al insertar el rol del usuario:', error.message);
      return null;
    }

    return data;
  }

  // Método para loguear al usuario
  async signInUser(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (data.session) {
      // Extrae el token de acceso y refresh token de la sesión
      const session = data.session
      const accessToken = session.access_token;
      const refreshToken = session.refresh_token;
      const expiresAt = session.expires_at;
      const userData = session.user;

      if(expiresAt){
        localStorage.setItem('expires_at', expiresAt.toString());  // Convertir a string
      }
      // Guarda el token y los datos de la sesión en localStorage
      localStorage.setItem('access_token_petguard', accessToken);
      localStorage.setItem('refresh_token', refreshToken);     
      localStorage.setItem('user', JSON.stringify(userData));  // Guarda el objeto user como string
    }

    return { data, error };
  }

  //Método para buscar el perfil del usuario
async userRole(datauser:any){
  try {
    const {data, error} = await this.supabase.from('user_roles').select('*').eq('user_id', datauser.user.id)
    if(data && data.length > 0){
      return data[0]
    }  
  } catch (error) {
    console.log(error)
  }
}

  
}
