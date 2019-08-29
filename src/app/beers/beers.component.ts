import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers: Array<Beer> = [];
  searchName: string;
  
  constructor(private _beerService : BeerService) { }

  ngOnInit() {
    this.loadBeers();
  }

  loadBeers(searchName?: string) {
    this._beerService.loadBeers(searchName).subscribe(data => {
      this.beers = (Object.values(data)) ;
    });
  }

  searchForBeer() {
    this.loadBeers(this.searchName)
  }

}
