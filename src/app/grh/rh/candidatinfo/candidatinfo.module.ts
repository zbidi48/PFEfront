import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatinfoRoutingModule } from './candidatinfo-routing.module';
import { CandidatinfoComponent } from './candidatinfo.component';


@NgModule({
  declarations: [CandidatinfoComponent],
  imports: [
    CommonModule,
    CandidatinfoRoutingModule
  ]
})
export class CandidatinfoModule { }
