import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardAutenticacion } from './guards/autenticacion/guard-autenticacion.guard';
import { GuardCuidador } from './guards/rol/cuidador/guard-cuidador.guard';
import { GuardDueno } from './guards/rol/dueno/guard-dueno.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
     
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'subir-oferta',
    loadChildren: () => import('./pages/subir-oferta/subir-oferta.module').then( m => m.SubirOfertaPageModule),
    canActivate: [GuardAutenticacion, GuardCuidador, GuardDueno]
  },
  {
    path: 'buscar-servicio',
    loadChildren: () => import('./pages/buscar-servicio/buscar-servicio.module').then( m => m.BuscarServicioPageModule),
    canActivate: [GuardAutenticacion, GuardDueno]
  },
  {
    path: 'servicio-actual',
    loadChildren: () => import('./pages/servicio-actual/servicio-actual.module').then( m => m.ServicioActualPageModule),
    canActivate: [GuardAutenticacion, GuardCuidador, GuardDueno]
  },
  {
    path: 'perfil-dueno',
    loadChildren: () => import('./pages/perfil-dueno/perfil-dueno.module').then( m => m.PerfilDuenoPageModule),
    canActivate: [GuardAutenticacion, GuardDueno]
  },
  {
    path: 'perfil-cuidador',
    loadChildren: () => import('./pages/perfil-cuidador/perfil-cuidador.module').then( m => m.PerfilCuidadorPageModule),
    canActivate: [GuardAutenticacion, GuardCuidador]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
