import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeersComponent } from './beers/beers.component';
import { FavouritesComponent } from './favourites/favourites.component';


const routes: Routes = [
  { path: '', component: BeersComponent, pathMatch:  'full' },
  { path: 'favourites', component: FavouritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
