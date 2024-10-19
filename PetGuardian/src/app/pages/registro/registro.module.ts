import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Asegúrate de que esto esté presente

import { RegistroPageRoutingModule } from './registro-routing.module';
import { RegistroPage } from './registro.page';
import { RegistroErrorModalComponent } from '../../modals/registro-error-modal/registro-error-modal.component';  // Importa el modal

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
  ],
  declarations: [RegistroPage, RegistroErrorModalComponent]
})
export class RegistroPageModule {}
