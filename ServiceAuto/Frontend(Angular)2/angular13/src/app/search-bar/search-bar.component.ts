import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { CarComponent } from '../car/car.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private service: SharedService, private parent: AppComponent) { }

  CarListS:any=[];
  CardClientListS:any=[];
  car!:any;

  @Input() key!:string;
  


  ngOnInit(): void {
    this.refreshCarSList(this.key);
    this.refreshCardClientSList(this.key);
  }

  refreshCarSList(val:string){ 
    this.service.searchCar(val).subscribe(data=>{
      this.CarListS=data;
    });
  }

  refreshCardClientSList(val:string){ 
    this.service.searchCardClient(val).subscribe(data=>{
      this.CardClientListS=data;
    });
  }
}
