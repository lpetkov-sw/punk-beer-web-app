import { Component, OnInit, Input } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { AppSettings } from '../appSettings';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {

  @Input() beer: object;
  isFavourite: boolean;

  constructor(private sessionStorage: SessionStorageService ) { }

  ngOnInit() {
  }

  onFavouriteClick(beerId: number) { 
    this.isFavourite = !this.isFavourite;
    

    /*this.sessionStorage.store(AppSettings.SESSION_STORE_FAV_KEY, beerId);

    this.sessionStorage.observe(AppSettings.SESSION_STORE_FAV_KEY)
            .subscribe((value) => console.log('new value', value));
    */
  }

}
