import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarServicioPage } from './buscar-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarServicioPageRoutingModule {}
