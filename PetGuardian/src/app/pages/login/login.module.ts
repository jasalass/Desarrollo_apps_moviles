import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { CredencialesModalComponent } from '../../modals/modal-login/credenciales-modal/credenciales-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage, CredencialesModalComponent],  // Declara el modal aquí
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega esto si es necesario
})
export class LoginPageModule {}
