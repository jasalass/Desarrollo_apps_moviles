import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioActualPageRoutingModule } from './servicio-actual-routing.module';

import { ServicioActualPage } from './servicio-actual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioActualPageRoutingModule
  ],
  declarations: [ServicioActualPage]
})
export class ServicioActualPageModule {}
