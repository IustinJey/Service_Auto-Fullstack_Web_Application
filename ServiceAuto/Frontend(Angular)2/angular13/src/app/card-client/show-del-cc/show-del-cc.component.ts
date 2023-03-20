import { AppComponent } from './../../app.component';
import { AotCompilerOptions } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { CardClientComponent } from '../card-client.component'; 

@Component({
  selector: 'app-show-del-cc',
  templateUrl: './show-del-cc.component.html',
  styleUrls: ['./show-del-cc.component.css']
})
export class ShowDelCcComponent implements OnInit {

  constructor(private service: SharedService, private TheApp:AppComponent) { }

  CardClientList:any=[];

  ModalTitle! :string;
  ActivateAddEditComp:boolean=false;
  card_client:any;

  ngOnInit(): void {
    this.refreshCardClientList();
  }

  addClick(){
    this.card_client={
      id_card_client: 0,
      nume_client:"",
      prenume_client:"",
      CNP_client:"",
      data_inregistrarii:"",
      data_nasterii:""
    };
    this.ModalTitle="Adauga Card de Client";
    this.ActivateAddEditComp=true;
  }

  editClick(item:any){
    this.card_client=item;
    this.ModalTitle="Modifica Card de Client";
    this.ActivateAddEditComp=true;
  }

  deleteClick(item:any){
    if(confirm("Esti sigur ca vrei sa stergi cardul de client din baza de date?")){
      this.service.deleteCardClient(item.id_card_client).subscribe(data=>{
        this.TheApp.appendUndo(
          [()=>{this.service.addCardClient(data).subscribe(data=>{this.refreshCardClientList()})},
           ()=>{this.service.deleteCardClient(item.id_car+1).subscribe(data=>{this.refreshCardClientList()})}]),
        alert("Cardul de client a fost stears cu succes!");
        this.refreshCardClientList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshCardClientList();
  }

  refreshCardClientList(){
    this.service.getCardClientList().subscribe(data=>{
      this.CardClientList=data;
    });
  }

  activeazaSort(){
    this.service.ordonare_carduri().subscribe(data=>{
      this.CardClientList=data;
    });
  }

  take_card_client(id:any){
    for (var val of this.CardClientList){
      if (val.id_card_client == id)
        return val
    }
  }
}
