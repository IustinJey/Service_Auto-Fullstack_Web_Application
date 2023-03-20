import { ShowDelTComponent } from './../show-del-t/show-del-t.component';
import { AppComponent } from './../../app.component';
import { TranzactieComponent } from './../tranzactie.component';
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-t',
  templateUrl: './add-edit-t.component.html',
  styleUrls: ['./add-edit-t.component.css']
})
export class AddEditTComponent implements OnInit {

  constructor(private service: SharedService, private TheApp: AppComponent, private show_del: ShowDelTComponent) { }

  @Input() tranzactie:any;
  id_tranzactie!:string;
  id_masina!:string;
  id_card_client!:string;
  suma_piese!:string;
  suma_manopera!:string;
  data!:string;
  suma_totala!:string;

  CarList:any = [];
  CardClientList:any = []


  ngOnInit(): void {
    this.LoadCarList();
    this.LoadCardClientList();
    this.id_tranzactie=this.tranzactie.id_tranzactie;
    this.id_masina=this.tranzactie.id_masina;
    this.id_card_client=this.tranzactie.id_card_client;
    this.suma_piese=this.tranzactie.suma_piese;
    this.suma_manopera=this.tranzactie.suma_manopera;
    this.data=this.tranzactie.data;
    this.suma_totala= this.tranzactie.suma_totala;

  }

  LoadCarList(){
    this.service.getAllCarsNames().subscribe((data:any)=>{
      this.CarList=data; 
    })
  }

  LoadCardClientList(){
    this.service.getAllCardsNames().subscribe((data:any)=>{
      this.CardClientList=data; 
    })
  }

  addTranzactie(){
    var val = {id_tranzactie:this.id_tranzactie,
      id_masina:this.id_masina,
      id_card_client:this.id_card_client,
      suma_piese:this.suma_piese,
      suma_manopera: this.suma_manopera,
      data: this.data,
      suma_totala: this.suma_totala};
      this.service.addTranzactie(val).subscribe(res=>{
        this.TheApp.appendUndo([() => {
          this.show_del.deleteClick(res)
        },                      () => {
          this.service.addTranzactie(val).subscribe(res=>{this.show_del.refreshTranzactieList()})
        }])
        alert("Tranzactie adaugata cu succes!");
      }); 
    }
  

  updateTranzactie(){
    var val = {id_tranzactie:this.id_tranzactie,
      id_masina:this.id_masina,
      id_card_client:this.id_card_client,
      suma_piese:this.suma_piese,
      suma_manopera: this.suma_manopera,
      data: this.data,
      suma_totala: this.suma_totala};
      this.service.updateTranzactie(val).subscribe(res=>{
        this.TheApp.appendUndo([() => {
          this.service.updateTranzactie(res).subscribe(res=>{this.show_del.refreshTranzactieList()})
        },                      () => {
          this.service.updateTranzactie(val).subscribe(res=>{this.show_del.refreshTranzactieList()})
        }])
        alert("Tranzactie actualizata cu succes!");
      }); 
    }

}