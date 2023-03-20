import { AppComponent } from './../../app.component';
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ShowDelCcComponent } from '../show-del-cc/show-del-cc.component';

@Component({
  selector: 'app-add-edit-cc',
  templateUrl: './add-edit-cc.component.html',
  styleUrls: ['./add-edit-cc.component.css']
})
export class AddEditCcComponent implements OnInit {

  constructor(private service: SharedService, private TheApp: AppComponent, private show_del: ShowDelCcComponent) { }

  @Input() card_client:any;
  id_card_client!:string;
  nume_client!:string;
  prenume_client!:string;
  CNP_client!:string;
  data_inregistrarii!:string;
  data_nasterii!:string;


  ngOnInit(): void {
    this.id_card_client=this.card_client.id_card_client;
    this.nume_client=this.card_client.nume_client;
    this.prenume_client=this.card_client.prenume_client;
    this.CNP_client=this.card_client.CNP_client;
    this.data_inregistrarii=this.card_client.data_inregistrarii;
    this.data_nasterii=this.card_client.data_nasterii;
  }

  addCardClient(){
    var val = {id_card_client:this.id_card_client,
      nume_client:this.nume_client,
      prenume_client:this.prenume_client,
      CNP_client:this.CNP_client,
      data_inregistrarii: this.data_inregistrarii,
      data_nasterii: this.data_nasterii};
      
      this.service.addCardClient(val).subscribe(res=>{
        this.TheApp.appendUndo([() => {
          this.show_del.deleteClick(res)
        },                      () => {
          this.service.addCardClient(val).subscribe(res=>{this.show_del.refreshCardClientList(),alert("Card adaugat") })
        }])
        alert("Card de client adaugat cu succes!");
      }); 
    }
  

  updateCardClient(){
    var val = {id_card_client:this.id_card_client,
      nume_client:this.nume_client,
      prenume_client:this.prenume_client,
      CNP_client:this.CNP_client,
      data_inregistrarii: this.data_inregistrarii,
      data_nasterii: this.data_nasterii};
      this.service.updateCardClient(val).subscribe(res=>{
        this.TheApp.appendUndo([() => {
          this.service.updateCardClient((res)).subscribe(res=>{this.show_del.refreshCardClientList()})
        },                      () => {
          this.service.updateCardClient(val).subscribe(res=>{this.show_del.refreshCardClientList()})
        }])
        alert("Card de client actualizat cu succes!");
      }); 
    }

}
