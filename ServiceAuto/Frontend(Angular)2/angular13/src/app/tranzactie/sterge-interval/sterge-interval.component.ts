import { ShowDelTComponent } from './../show-del-t/show-del-t.component';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sterge-interval',
  templateUrl: './sterge-interval.component.html',
  styleUrls: ['./sterge-interval.component.css']
})
export class StergeIntervalComponent implements OnInit {

  constructor(private service: SharedService, private showDel: ShowDelTComponent) { }

  interval1:any;
  interval2:any;

  ngOnInit(): void {
  }

  sterge_tranzactiile()
  {
    if(confirm("Esti sigur ca vrei sa stergi tranzactiile din baza de date?")){
    this.service.sterge_tran(this.interval1, this.interval2).subscribe(data=>{
      alert(data.toString());
    })
  }
  
}

}
