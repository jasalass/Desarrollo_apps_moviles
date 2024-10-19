import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubirOfertaPageRoutingModule } from './subir-oferta-routing.module';

import { SubirOfertaPage } from './subir-oferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubirOfertaPageRoutingModule
  ],
  declarations: [SubirOfertaPage]
})
export class SubirOfertaPageModule {}
