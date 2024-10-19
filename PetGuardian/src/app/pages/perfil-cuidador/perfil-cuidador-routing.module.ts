import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilCuidadorPage } from './perfil-cuidador.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilCuidadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilCuidadorPageRoutingModule {}
