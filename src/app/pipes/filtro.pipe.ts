import { Pipe, PipeTransform } from '@angular/core';
import { AlbumData } from '../models/album.model';
import { Superheroes } from '../models/superheroes.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(items: any[], searchParam: string = '', prop: string = 'title'): any[] {
    if (searchParam) {
      if (searchParam === 'todos') {
        return items;
      }
      return items.filter((item) =>
        item[prop].toLowerCase().includes(searchParam.toLowerCase())
      );
    } else {
      return items;
    }
  }

}
