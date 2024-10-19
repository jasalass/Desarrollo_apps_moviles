import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-credenciales-modal',
  templateUrl: './credenciales-modal.component.html',
  styleUrls: ['./credenciales-modal.component.scss'],
})
export class CredencialesModalComponent {
  constructor(private modalController: ModalController) {}

  // Método para cerrar el modal
  dismiss() {
    this.modalController.dismiss();
  }
}
