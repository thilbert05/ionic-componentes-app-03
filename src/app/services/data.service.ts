import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../models/user.model';
import { Componente } from '../models/componente.model';
import { AlbumData } from '../models/album.model';
import { Superheroes } from '../models/superheroes.model';

import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<UserData[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  getOptions() {
    return this.http.get<Componente[]>('/assets/data/menu-options.json');
  }

  getAlbums() {
    return this.http.get<AlbumData[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes() {
    return this.http
      .get<Superheroes[]>('/assets/data/superheroes.json')
      .pipe(delay(1500));
  }
}
