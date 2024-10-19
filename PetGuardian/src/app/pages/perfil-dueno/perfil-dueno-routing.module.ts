import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilDuenoPage } from './perfil-dueno.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilDuenoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilDuenoPageRoutingModule {}
