import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilCuidadorPageRoutingModule } from './perfil-cuidador-routing.module';

import { PerfilCuidadorPage } from './perfil-cuidador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilCuidadorPageRoutingModule
  ],
  declarations: [PerfilCuidadorPage]
})
export class PerfilCuidadorPageModule {}
