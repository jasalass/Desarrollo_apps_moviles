import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioActualPage } from './servicio-actual.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioActualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioActualPageRoutingModule {}
