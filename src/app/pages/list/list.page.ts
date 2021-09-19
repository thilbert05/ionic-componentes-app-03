import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { UserData } from '../../models/user.model';
import { IonItemSliding, IonList } from '@ionic/angular';

type User = UserData;

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonList) ionList: IonList;
  usuarios$: Observable<User[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios$ = this.dataService.getUsers();
  }

  favorite(user: User, slidingEl: IonItemSliding) {
    console.log('Favorite: ',user.name);
    // slidingEl.close();
    this.ionList.closeSlidingItems();
  }

  share(user: User, slidingEl: IonItemSliding) {
    console.log('Share: ',user.name);
    // slidingEl.close();
    this.ionList.closeSlidingItems();
  }

  delete(user: User, slidingEl: IonItemSliding) {
    console.log('Delete: ',user.name);
    // slidingEl.close();
    this.ionList.closeSlidingItems();
  }

}
