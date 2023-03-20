import { SearchBarComponent } from './search-bar/search-bar.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CarComponent } from './car/car.component';
import { CardClientComponent } from './card-client/card-client.component';
import { TranzactieComponent } from './tranzactie/tranzactie.component';



const routes: Routes = [
{path:'car',component:  CarComponent},
{path:'card_client',component:  CardClientComponent},
{path:'tranzactie',component:  TranzactieComponent},
{path:'search',component:  SearchBarComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
