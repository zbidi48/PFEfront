import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichedepaieemployeeRoutingModule } from './fichedepaieemployee-routing.module';
import { FichedepaieemployeeComponent } from './fichedepaieemployee.component';


@NgModule({
  declarations: [FichedepaieemployeeComponent],
  imports: [
    CommonModule,
    FichedepaieemployeeRoutingModule
  ]
})
export class FichedepaieemployeeModule { }
