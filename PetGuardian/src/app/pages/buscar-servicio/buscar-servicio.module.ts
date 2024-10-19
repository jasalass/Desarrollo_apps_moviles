import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarServicioPageRoutingModule } from './buscar-servicio-routing.module';

import { BuscarServicioPage } from './buscar-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarServicioPageRoutingModule
  ],
  declarations: [BuscarServicioPage]
})
export class BuscarServicioPageModule {}
