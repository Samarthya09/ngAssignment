import { NgModule } from '@angular/core';
import { Assignment2Component } from './containers/assignment2.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [
    Assignment2Component
  ],
  exports: [
    Assignment2Component
  ],
  imports:[ 
    CommonModule,
    BrowserModule
  ]
})
export class Assignment2Module {

}
