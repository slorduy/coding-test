import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';




@NgModule({
  declarations: [
    NavbarComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponentComponent
  ]
})
export class ComponentsModule { }
