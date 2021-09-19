import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  disabled = false;

  personajes: string[] = [
    'Aquaman',
    'Superman',
    'Batman',
    'Wonder Woman',
    'Green Lantern',
    'Flash'
  ];

  constructor() { }

  ngOnInit() {

  }

  doReorder(event: Event) {
    const ev = event as CustomEvent<ItemReorderEventDetail>;
    console.log('Item desde', ev.detail.from);
    console.log('Item hasta', ev.detail.to);

    const itemMover = this.personajes.splice(ev.detail.from, 1)[0];
    this.personajes.splice(ev.detail.to, 0, itemMover);

    ev.detail.complete();
    console.log(this.personajes);
  }

  toggleDisable() {
    this.disabled = !this.disabled;
  }



}
