import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registro-error-modal',
  templateUrl: './registro-error-modal.component.html',
  styleUrls: ['./registro-error-modal.component.scss'],
})
export class RegistroErrorModalComponent {
  @Input() errorMessage: string = '';  // Usamos Input para recibir el mensaje de error

  constructor(private modalController: ModalController) {}

  // Método para cerrar el modal
  dismiss() {
    this.modalController.dismiss();
  }
}
