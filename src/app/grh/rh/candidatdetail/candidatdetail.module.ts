import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatdetailRoutingModule } from './candidatdetail-routing.module';
import { CandidatdetailComponent } from './candidatdetail.component';


@NgModule({
  declarations: [CandidatdetailComponent],
  imports: [
    CommonModule,
    CandidatdetailRoutingModule
  ]
})
export class CandidatdetailModule { }
