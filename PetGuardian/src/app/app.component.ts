import { Component, OnInit } from '@angular/core';
import { ServicioLoginService } from 'src/app/services/login/servicio-login.service';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';  // Importa el MenuController
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false;
  esCuidador: boolean = false;
  esDueno: boolean = false;
  nombre: string = '';
  apellido: string = '';

  constructor(
    private servicioLogin: ServicioLoginService,
    private router: Router,
    private menuCtrl: MenuController,  // Inyecta el MenuController
    private changeDetector: ChangeDetectorRef  // Añadir ChangeDetectorRef para refrescar la vista
  ) {}

  ngOnInit() {
    this.refreshMenu();

    // Escucha el cambio de rutas para cerrar el menú automáticamente
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.menuCtrl.close();  // Cierra el menú cuando se carga una nueva página
      }
    });
  }

  // Método para cerrar sesión
  async logout() {
    await this.servicioLogin.logout();  // Limpia el storage y cierra la sesión
    this.isAuthenticated = false;
    this.esCuidador = false;
    this.esDueno = false;

    // Redirigir a login y luego actualizar el menú
    this.router.navigate(['/home']).then(() => {
      this.refreshMenu();
      this.menuCtrl.close();  // Cierra el menú después de cerrar sesión
    });
  }

  // Método para refrescar el menú
  refreshMenu() {
    this.servicioLogin.getUserData().then(userData => {
      if (userData.accessToken) {
        this.isAuthenticated = true;
        this.esCuidador = userData.cuidador === 'true';
        this.esDueno = userData.dueno === 'true';
        this.nombre = userData.nombre;
        this.apellido = userData.apellido;
      } else {
        this.isAuthenticated = false;
        this.esCuidador = false;
        this.esDueno = false;
      }
      this.changeDetector.detectChanges();  // Forzamos la detección de cambios
    });
  }
}
