import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit, OnDestroy {
  loadingEl: HTMLIonLoadingElement;
  timer: NodeJS.Timeout;
  constructor(private loadingCtrl: LoadingController) { }


  ngOnInit() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  mostrarLoading() {
    this.presentLoading('Hola Mundo');

    this.timer = setTimeout(() => {
      this.loadingEl.dismiss();
    },2000);
  }

  async presentLoading(message: string) {
    this.loadingEl = await this.loadingCtrl.create({
      message,
      showBackdrop: true,
      spinner: 'crescent',
      // duration: 2000
    });
    await this.loadingEl.present();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

}
