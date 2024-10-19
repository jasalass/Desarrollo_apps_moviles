import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirOfertaPage } from './subir-oferta.page';

const routes: Routes = [
  {
    path: '',
    component: SubirOfertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubirOfertaPageRoutingModule {}
