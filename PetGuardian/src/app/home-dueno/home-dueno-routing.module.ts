import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDuenoPage } from './home-dueno.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDuenoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDuenoPageRoutingModule {}
