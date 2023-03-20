import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

  getCarList():Observable<any[]>{
    return  this.http.get<any[]>(this.APIUrl + '/car/');
  }

  addCar(val:any){
    return this.http.post<any[]>(this.APIUrl + '/car/', val);
  }

  updateCar(val:any){
    return this.http.put<any[]>(this.APIUrl + '/car/', val);
  }

  deleteCar(val:any){
    return this.http.delete<any[]>(this.APIUrl + '/car/' + val);
  }


// CARD_CLIENT

  getCardClientList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/card_client/');
  }

  addCardClient(val:any){
    return this.http.post<any[]>(this.APIUrl + '/card_client/', val);
  }

  updateCardClient(val:any){
    return this.http.put<any[]>(this.APIUrl + '/card_client/', val);
  }

  deleteCardClient(val:any){
    return this.http.delete<any[]>(this.APIUrl + '/card_client/'+val);
  }

// TRANZACTIE

  getTranzactie():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/tranzactie/');
  }

  addTranzactie(val:any){
    return this.http.post<any[]>(this.APIUrl + '/tranzactie/', val);
  }

  updateTranzactie(val:any){
    return this.http.put<any[]>(this.APIUrl + '/tranzactie/', val);
  }

  deleteTranzactie(val:any){
    return this.http.delete<any[]>(this.APIUrl + '/tranzactie/'+val);
  }

  getAllCarsNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/car/');
  }

  getAllCardsNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/card_client/');
  }


  // SEARCH

  searchCar(val:any){
    return this.http.get<any[]>(this.APIUrl+'/car_search/'+val)
  }

  searchCardClient(val:any){
    return this.http.get<any[]>(this.APIUrl+'/card_client_search/'+val)
  }

  interval_tranzactie(val1:any, val2:any){
    return this.http.get<any[]>(this.APIUrl+'/interval_tranzactie/'+val1+'/'+val2)
  }

  ordonare_manopera(){
    return this.http.get<any[]>(this.APIUrl+'/car_ordonare/')
  }
  
  ordonare_carduri(){
    return this.http.get<any[]>(this.APIUrl+'/carduri_ordonare/')
  }

  sterge_tran(val1:any, val2:any){
    return this.http.delete<any[]>(this.APIUrl +'/sterge_tranzactii/'+val1+'/'+val2)
  }

  actualizare_garantii():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/actualizare_garantie/')
  }

  generare_aleatorie(val:any){
    return this.http.get<any[]>(this.APIUrl + '/generare_aleatorie/' + val);
  }

  undo(){
    return this.http.get<any[]>(this.APIUrl+'/undo/')
  }
 
}