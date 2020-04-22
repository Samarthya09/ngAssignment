import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  // filter : string=" ";
  value = '';

  inputvalue(value:string){
    this.value=value
    }
  

}
