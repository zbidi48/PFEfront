import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratemployeeRoutingModule } from './contratemployee-routing.module';
import { ContratemployeeComponent } from './contratemployee.component';


@NgModule({
  declarations: [ContratemployeeComponent],
  imports: [
    CommonModule,
    ContratemployeeRoutingModule
  ]
})
export class ContratemployeeModule { }
