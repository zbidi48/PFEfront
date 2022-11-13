import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailemployeeRoutingModule } from './detailemployee-routing.module';
import { DetailemployeeComponent } from './detailemployee.component';


@NgModule({
  declarations: [DetailemployeeComponent],
  imports: [
    CommonModule,
    DetailemployeeRoutingModule
  ]
})
export class DetailemployeeModule { }
