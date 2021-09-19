import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlbumData } from 'src/app/models/album.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit, OnDestroy {
  showSearchBar = false;
  albums: AlbumData[] = [];
  searchText = '';
  albumsSub: Subscription;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.albumsSub = this.dataService.getAlbums().subscribe((albumsResp) => {
      this.albums = albumsResp;
    });
  }

  toggleSearch() {
    this.showSearchBar = !this.showSearchBar;
  }

  onSearchChange(event) {
    this.searchText = event.detail.value;
  }

  ngOnDestroy(): void {
    this.albumsSub.unsubscribe();
  }



}
