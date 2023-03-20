import { ShowDelComponent } from './../show-del/show-del.component';
import { AppComponent } from './../../app.component';
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service: SharedService, private TheApp: AppComponent, private show_del: ShowDelComponent) { }

  @Input() car:any;
  id_car!:string;
  model_car!:string;
  an_achizitie_car!:string;
  nr_km_car!:string;
  garantie_car!:string;

  nr_generari:any


  ngOnInit(): void {
    this.id_car=this.car.id_car;
    this.model_car=this.car.model_car;
    this.an_achizitie_car=this.car.an_achizitie_car;
    this.nr_km_car=this.car.nr_km_car;
    this.garantie_car=this.car.garantie_car;
  }

  addCar(){
    var val = {id_car:this.id_car,
               model_car:this.model_car,
               an_achizitie_car:this.an_achizitie_car,
               nr_km_car:this.nr_km_car,
               garantie_car: this.garantie_car};
    this.service.addCar(val).subscribe(res=>{ 
      console.log(res)
      this.TheApp.appendUndo([() => {
        this.show_del.deleteClick(res)
      },                      () => {
        this.service.addCar(this.Car(res)).subscribe(res=>{this.show_del.refreshCarList()})
      }])
      alert("Masina adaugata cu succes!");
    }); 
  }

  Car(item: any){
    var val = {id_car:this.show_del.get_id(item),
               model_car:this.model_car,
               an_achizitie_car:this.an_achizitie_car,
               nr_km_car:this.nr_km_car,
               garantie_car: this.garantie_car};
    return val;
  }
  

  updateCar(){
    var val = {id_car:this.id_car,
      model_car:this.model_car,
      an_achizitie_car:this.an_achizitie_car,
      nr_km_car:this.nr_km_car,
      garantie_car: this.garantie_car};
      this.service.updateCar(val).subscribe(res=>{
        this.TheApp.appendUndo([() => {
          this.service.updateCar(res).subscribe(res=>{this.show_del.refreshCarList()})
        },                      () => {
          this.service.updateCar(val).subscribe(res=>{this.show_del.refreshCarList()})
        }])
        alert("Masina actualizata  cu succes!");
      }); 
    }

  genereazaCar(){
    this.service.generare_aleatorie(this.nr_generari)
    }

}
