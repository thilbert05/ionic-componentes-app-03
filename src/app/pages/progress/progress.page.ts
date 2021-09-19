import { Component, OnInit } from '@angular/core';
import { RangeChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje = 0.05;

  constructor() { }

  ngOnInit() {
  }

  rangeChange(event: Event) {
    const ev = event as CustomEvent<RangeChangeEventDetail>;
    this.porcentaje = (ev.detail.value as number)/100;
  }

}
