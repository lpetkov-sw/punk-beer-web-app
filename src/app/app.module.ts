import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BeersComponent } from './beers/beers.component';
import { FavouritesComponent } from './favourites/favourites.component';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BeerService } from './services/beer.service';
import { TruncateModule } from 'ng2-truncate';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import {NgxWebstorageModule} from 'ngx-webstorage';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BeersComponent,
    FavouritesComponent,
    BeerCardComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TruncateModule,
    FormsModule,
    FontAwesomeModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [
    BeerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for using in other components
    library.addIcons(fasStar, farStar);
  }

}
