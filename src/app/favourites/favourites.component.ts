import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favouriteBeers: Array<Beer> = [];
  
  constructor(private _beerService : BeerService) { }

  ngOnInit() {
    this.loadFavouriteBeers();
    console.log(this.favouriteBeers);
  }

  loadFavouriteBeers() {
    this._beerService.loadFavouriteBeers().subscribe(data => {
      this.favouriteBeers = (Object.values(data)) ;
    });
  }

}
