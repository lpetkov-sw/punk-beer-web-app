import { Component, OnInit, Input } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { AppSettings } from '../appSettings';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {

  @Input() beer: Beer;

  constructor( private _beerService : BeerService ) {

  }

  ngOnInit() {
  }

  onFavouriteClick(beerId: number) { 
    if (this.beer.isFavourite) {
      this._beerService.removeBeerFromFavourites(beerId);
    } else {
      this._beerService.addBeerToFavourites(beerId);
    }
    this.beer.isFavourite = !this.beer.isFavourite;
  }
}
