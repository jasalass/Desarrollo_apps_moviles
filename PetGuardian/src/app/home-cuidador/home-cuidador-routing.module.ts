import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCuidadorPage } from './home-cuidador.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCuidadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCuidadorPageRoutingModule {}
