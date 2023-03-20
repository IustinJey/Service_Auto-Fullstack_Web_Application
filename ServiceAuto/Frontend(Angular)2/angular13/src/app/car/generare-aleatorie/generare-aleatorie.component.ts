import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-generare-aleatorie',
  templateUrl: './generare-aleatorie.component.html',
  styleUrls: ['./generare-aleatorie.component.css']
})
export class GenerareAleatorieComponent implements OnInit {

  constructor(private service: SharedService) { }

  nr_generari!:number

  ngOnInit(): void {
  }

  genereazaCar(){
    this.service.generare_aleatorie(this.nr_generari).subscribe(data=>{
      alert(data.toString());
    })
    }
  
}
