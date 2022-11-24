import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscritformationRoutingModule } from './inscritformation-routing.module';
import { InscritformationComponent } from './inscritformation.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [InscritformationComponent],
    imports: [
        CommonModule,
        InscritformationRoutingModule,
        ReactiveFormsModule
    ]
})
export class InscritformationModule { }
