import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDuenoPageRoutingModule } from './home-dueno-routing.module';

import { HomeDuenoPage } from './home-dueno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDuenoPageRoutingModule
  ],
  declarations: [HomeDuenoPage]
})
export class HomeDuenoPageModule {}
