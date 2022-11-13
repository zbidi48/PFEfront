import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatinfoRoutingModule } from './candidatinfo-routing.module';
import { CandidatinfoComponent } from './candidatinfo.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [CandidatinfoComponent],
    imports: [
        CommonModule,
        CandidatinfoRoutingModule,
        ReactiveFormsModule
    ]
})
export class CandidatinfoModule { }
