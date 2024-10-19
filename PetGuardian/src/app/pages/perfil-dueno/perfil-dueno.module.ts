import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilDuenoPageRoutingModule } from './perfil-dueno-routing.module';

import { PerfilDuenoPage } from './perfil-dueno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilDuenoPageRoutingModule
  ],
  declarations: [PerfilDuenoPage]
})
export class PerfilDuenoPageModule {}
