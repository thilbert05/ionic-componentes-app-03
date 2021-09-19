import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {
  icon = 'heart-outline';
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.icon = this.icon === 'heart-outline' ? 'heart' : 'heart-outline';
  }

}
