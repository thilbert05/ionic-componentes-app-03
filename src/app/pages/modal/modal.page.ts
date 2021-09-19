import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  modalEl: HTMLIonModalElement;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  openModal() {
    this.presentModal();
  }

  async presentModal() {
    this.modalEl = await this.modalCtrl.create({
      component: ModalInfoPage,
      swipeToClose: true,
      componentProps: {
        nombre: 'Tomas',
        pais: 'Panamá'
      }
    });
    await this.modalEl.present();

    const {data} = await this.modalEl.onDidDismiss();
    console.log(data);
  }

}
