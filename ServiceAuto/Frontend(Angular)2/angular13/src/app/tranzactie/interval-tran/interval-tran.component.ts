import { ShowDelTComponent } from './../show-del-t/show-del-t.component';
import { TranzactieComponent } from './../tranzactie.component';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-interval-tran',
  templateUrl: './interval-tran.component.html',
  styleUrls: ['./interval-tran.component.css']
})
export class IntervalTranComponent implements OnInit {

  constructor(private service: SharedService, private show_del: ShowDelTComponent) { }
  ListInterval:any = []
  interval_a:any;
  interval_b:any;

  ngOnInit(): void {

  }   

  filtreaza(){ 
    this.service.interval_tranzactie(this.interval_a, this.interval_b).subscribe(data=>{
      this.ListInterval=data;
    this.show_del.filter_list(this.ListInterval);

    });
  }

}
