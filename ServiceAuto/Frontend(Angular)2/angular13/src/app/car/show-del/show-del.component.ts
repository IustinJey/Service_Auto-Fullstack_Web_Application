import { AppComponent } from './../../app.component';
import { CarComponent } from './../car.component';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-show-del',
  templateUrl: './show-del.component.html',
  styleUrls: ['./show-del.component.css']
})
export class ShowDelComponent implements OnInit {

  constructor(private service: SharedService, private TheApp: AppComponent) { }

  CarList:any=[];

  ModalTitle! :string;
  ActivateAddEditComp:boolean=false;
  ActivateGenerari:boolean=false;
  car:any;

  ngOnInit(): void {
    this.refreshCarList();
  }

  addClick(){
    this.car={
      id_car: 0,
      model_car:"",
      an_achizitie_car:"",
      nr_km_car:"",
      garantie_car:""
    };
    this.ModalTitle="Adauga Masina";
    this.ActivateAddEditComp=true;
  }

  editClick(item:any){
    this.car=item;
    this.ModalTitle="Modifica masina";
    this.ActivateAddEditComp=true;
  }

  deleteClick(item:any){
    if(confirm("Esti sigur ca vrei sa stergi masina din baza de date?")){
      this.service.deleteCar(item.id_car).subscribe(data=>{
        this.TheApp.appendUndo(
          [()=>{this.service.addCar(item).subscribe(data=>{this.refreshCarList()})},
           ()=>{this.service.deleteCar(item.id_car).subscribe(data=>{this.refreshCarList()})}]),
        alert("Masina a fost stearsa cu succes!");
        this.refreshCarList();
      })
    }
    
  }

  closeClick(){
    this.ActivateAddEditComp=false;
    this.ActivateGenerari=false;
    this.refreshCarList();
  }

  actualizeaza_garantiile(){
    this.service.actualizare_garantii().subscribe(data=>{
      alert(data.toString());
    });
    this.refreshCarList(); 
  }

  refreshCarList(){
    this.service.getCarList().subscribe(data=>{
      this.CarList=data;
    });
  }
 
  activeazaSort(){
    this.service.ordonare_manopera().subscribe(data=>{
      this.CarList=data;
    });
  }

  generare(){
    this.ModalTitle="Generare aleatorie";
    this.ActivateGenerari=true;
  }

  get_id(item:any){
    return item.id_car;
  }

  delete2(item:any){
    if(confirm("Esti sigur ca vrei sa stergi masina din baza de date?")){
      this.service.deleteCar(item.id_car).subscribe(data=>{this.refreshCarList()})
  }
}
}
