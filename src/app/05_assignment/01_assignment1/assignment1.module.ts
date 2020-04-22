import { NgModule } from '@angular/core';
import { Assignment1Component } from './containers/assignment1.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    Assignment1Component
  ],
  exports: [
    Assignment1Component

  ],

imports:
[FormsModule]})
export class Assignment1Module {

}
