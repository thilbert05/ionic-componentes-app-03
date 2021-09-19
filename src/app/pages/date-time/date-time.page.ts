import { Component, OnInit } from '@angular/core';
import { DatetimeChangeEventDetail, PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  bornDate = new Date();

  customYearValues = [2025, 2020, 2016, 2008, 2004, 2000, 1996];
  customPickerOpts: any = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => {
          console.log(event);
        }
      },
      {
        text: 'Mundo',
        handler: () => {
          console.log('Log!');
        }
      },
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event) {
    console.log(new Date(event.detail.value));
  }

}
