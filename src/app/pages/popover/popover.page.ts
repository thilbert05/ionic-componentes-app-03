import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popoverEl = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      event: ev,
      backdropDismiss:false,
      translucent: true
    });
    await popoverEl.present();

    const {data} = await popoverEl.onDidDismiss();
    console.log('Desde popover page, item:', data.item);
  }

}
