import { SearchBarComponent } from './search-bar/search-bar.component';
import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular13';
  SearchActivate:boolean=false;

  undo_operations: any = [];
  redo_operations: any = [];

  operation: any = [];


  search_key!:string;
  

  ngOnInit(): void {
    
  } 
  

  activate_search(){
    console.log(this.search_key)
    this.SearchActivate = true
    
  }

  appendUndo(val:any){
    this.undo_operations.push(val);
    
  }

  Undo(){
    console.log(this.undo_operations, this.redo_operations)
    this.operation = this.undo_operations.pop()
    this.redo_operations.push(this.operation)
    this.operation[0]()
  }

  Redo(){
    console.log(this.undo_operations, this.redo_operations)
    this.operation = this.redo_operations.pop()
    this.undo_operations.push(this.operation)
    this.operation[1]()
  }
}

