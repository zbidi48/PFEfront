import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichdepaieRoutingModule } from './fichdepaie-routing.module';
import { FichdepaieComponent } from './fichdepaie.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [FichdepaieComponent],
    imports: [
        CommonModule,
        FichdepaieRoutingModule,
        ReactiveFormsModule
    ]
})
export class FichdepaieModule { }
