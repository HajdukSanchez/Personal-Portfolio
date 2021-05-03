import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { TechnologiesLayoutComponent } from './components/technologies-layout/technologies-layout.component';



@NgModule({
  declarations: [
    TechnologiesComponent,
    TechnologiesLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TechnologiesComponent,
    TechnologiesLayoutComponent
  ]
})
export class TechnologiesModule { }
