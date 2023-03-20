import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { TranzactieComponent } from '../tranzactie.component';

@Component({
  selector: 'app-show-del-t',
  templateUrl: './show-del-t.component.html',
  styleUrls: ['./show-del-t.component.css']
})
export class ShowDelTComponent implements OnInit {

    constructor(private service: SharedService, private TheApp: AppComponent) { }
  
    TranzactieList:any=[];
  
    ModalTitle! :string;
    ActivateAddEditComp:boolean=false;
    filtruActivat:boolean=false;
    stergeActivat:boolean=false;
    tranzactie:any;
  
    ngOnInit(): void {
      this.refreshTranzactieList();
    }
  
    filter_list(list:any){
      this.TranzactieList=list
    }

    activeaza_filtru(){
      this.ModalTitle="Filtru"
      this.filtruActivat = true;
    }

    addClick(){
      this.tranzactie={
        id_tranzactie: 0,
        id_masina:"",
        id_card_client:"",
        suma_piese:"",
        suma_manopera:"",
        data:"",
        suma_totala:"",
      };
      this.ModalTitle="Adauga Tranzactie";
      this.ActivateAddEditComp=true;
      this.filtruActivat = false;
    }
  
    editClick(item:any){
      this.tranzactie=item;
      this.ModalTitle="Modifica Tranzactie";
      this.ActivateAddEditComp=true;
    }
  
    deleteClick(item:any){
      if(confirm("Esti sigur ca vrei sa stergi masina din baza de date?")){
        this.service.deleteTranzactie(item.id_tranzactie).subscribe(data=>{
          this.TheApp.appendUndo(
            [()=>{this.service.addTranzactie(data).subscribe(data=>{this.refreshTranzactieList()})},
             ()=>{this.service.deleteTranzactie(item.id_car+1).subscribe(data=>{this.refreshTranzactieList()})}]),
          alert("Tranzactia a fost stearsa cu succes!");
          this.refreshTranzactieList();
        })
      }
      
    }
  
    closeClick(){
      this.ActivateAddEditComp=false;
      this.refreshTranzactieList();
      this.stergeActivat = false;
    }

    closeFilter(){
      this.ActivateAddEditComp=false;
      this.filtruActivat = true;
    }
  
    refreshTranzactieList(){
      this.service.getTranzactie().subscribe(data=>{
        this.TranzactieList=data;
      });
    }
    
    sterge_t(){
      this.stergeActivat = true;
      this.refreshTranzactieList()
    }
  }
