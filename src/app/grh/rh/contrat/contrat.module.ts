import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { ContratComponent } from './contrat.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ContratComponent],
    imports: [
        CommonModule,
        ContratRoutingModule,
        ReactiveFormsModule
    ]
})
export class ContratModule { }
