import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppSettings} from '../appSettings';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private _http: HttpClient) {

  }

  loadBeers(searchName?: string) {
    if (searchName)
      return this._http.get(AppSettings.ALL_BEERS_BY_NAME + searchName);
    
    return this._http.get(AppSettings.ALL_BEERS);
  }
}
