import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscritformationemployeeRoutingModule } from './inscritformationemployee-routing.module';
import { InscritformationemployeeComponent } from './inscritformationemployee.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [InscritformationemployeeComponent],
  imports: [
    CommonModule,
    InscritformationemployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class InscritformationemployeeModule { }
