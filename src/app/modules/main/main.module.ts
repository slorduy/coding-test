import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ]
})
export class MainModule { }
