import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CardClientComponent } from './card-client/card-client.component';
import { TranzactieComponent } from './tranzactie/tranzactie.component';
import { ShowDelComponent } from './car/show-del/show-del.component';
import { AddEditComponent } from './car/add-edit/add-edit.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ShowDelCcComponent } from './card-client/show-del-cc/show-del-cc.component';
import { AddEditCcComponent } from './card-client/add-edit-cc/add-edit-cc.component';
import { ShowDelTComponent } from './tranzactie/show-del-t/show-del-t.component';
import { AddEditTComponent } from './tranzactie/add-edit-t/add-edit-t.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { IntervalTranComponent } from './tranzactie/interval-tran/interval-tran.component';
import { StergeIntervalComponent } from './tranzactie/sterge-interval/sterge-interval.component';
import { ActualizareGarantiiComponent } from './car/actualizare-garantii/actualizare-garantii.component';
import { GenerareAleatorieComponent } from './car/generare-aleatorie/generare-aleatorie.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CardClientComponent,
    TranzactieComponent,
    ShowDelComponent,
    AddEditComponent,
    ShowDelCcComponent,
    AddEditCcComponent,
    ShowDelTComponent,
    AddEditTComponent,
    SearchBarComponent,
    IntervalTranComponent,
    StergeIntervalComponent,
    ActualizareGarantiiComponent,
    GenerareAleatorieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [SharedService, SearchBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
