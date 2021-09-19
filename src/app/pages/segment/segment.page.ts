import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Superheroes } from '../../models/superheroes.model';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes$: Observable<Superheroes[]>;
  filter = 'todos';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes$ = this.dataService.getHeroes();
  }

  segmentChanged(ev: Event) {
    const event = ev as CustomEvent<SegmentChangeEventDetail>;
    this.filter = event.detail.value;
  }

}
