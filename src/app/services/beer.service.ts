import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';
import {AppSettings} from '../appSettings';
import { Beer } from '../models/beer.model';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor( private _http: HttpClient, private sessionStorage: SessionStorageService ) {
    //sessionStorage.clear();
  }

  loadBeers(searchName?: string): Observable<Beer> {
    let beers: Observable<any>;
    if (searchName)
      beers = this._http.get(AppSettings.ALL_BEERS_BY_NAME + searchName);
    else
      beers = this._http.get(AppSettings.ALL_BEERS);

    // Adapt API response to the Beer model
    return this.mapBeerObsevable(beers);
  }

  loadFavouriteBeers(): Observable<Beer> {
    return this.mapBeerObsevable(this._http.get(AppSettings.ALL_BEERS), true);
  }
  
  private mapBeerObsevable(beerData: Observable<any>, onlyFavourites: boolean = false): Observable<Beer> {
    let favouriteBeerIds = this.getFavouriteBeerIds();
    
    return beerData.pipe(
      map((data: any) => {
        // add is_favourite to the observer in order to adapt it to the Beer model in appropriate way
        data.map( currData => currData.is_favourite = favouriteBeerIds.includes(currData.id) );
        let beer = data.map(Beer.adapt);

        if (onlyFavourites)
          return beer.filter( beerItem =>  beerItem.isFavourite)
        else
          return beer
      }
    ))
  }
  
  private getFavouriteBeerIds(): Array<number> {
    let favouriteBeers: Array<number> = JSON.parse(sessionStorage.getItem(AppSettings.SESSION_STORE_FAV_KEY));

    if (!favouriteBeers) {
      favouriteBeers = [];
    }
    return favouriteBeers;
  }

  private saveFavouriteBeerIds(beerIds: Array<number>) {
    sessionStorage.setItem(AppSettings.SESSION_STORE_FAV_KEY, JSON.stringify(beerIds));
  }

  addBeerToFavourites(beerId: number) {
    let favIdsArr: Array<number> = this.getFavouriteBeerIds();
    favIdsArr.push(beerId)
    this.saveFavouriteBeerIds(favIdsArr);
  }

  removeBeerFromFavourites(beerId: number) {
    let favIdsArr: Array<number> = this.getFavouriteBeerIds();
    const index: number = favIdsArr.indexOf(beerId);
    if (index !== -1) {
      favIdsArr.splice(index, 1);
    }
    this.saveFavouriteBeerIds(favIdsArr);
  }

}
