import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarDDDComponent } from './components/nav-bar-ddd/nav-bar-ddd.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavBarDDDComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarDDDComponent
  ]
})
export class SharedModule { }
