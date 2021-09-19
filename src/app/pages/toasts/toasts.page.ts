import { Component, OnInit } from '@angular/core';
import { ToastController, ToastOptions } from '@ionic/angular';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.page.html',
  styleUrls: ['./toasts.page.scss'],
})
export class ToastsPage implements OnInit {
  private toastEl: HTMLIonToastElement;
  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    this.toastEl = await this.toastCtrl.create({
      message: 'This is a Toast',
      position: 'bottom',
      duration: 2000,
    });
    this.toastEl.present();
  }

  async presentToastWithOpts() {
    const toastOpts: ToastOptions = {
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          role: 'cancel',
          text: 'Done',
          handler: () => {
            console.log('Canceled clicked!');
          }
        }
      ]
    };

    this.toastEl = await this.toastCtrl.create(toastOpts);
    await this.toastEl.present();

    const {role} = await this.toastEl.onDidDismiss();
    console.log('OnDidDismiss resolved with role', role);
  }

}
