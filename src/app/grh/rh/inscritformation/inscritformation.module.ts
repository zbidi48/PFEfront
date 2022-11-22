import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscritformationRoutingModule } from './inscritformation-routing.module';
import { InscritformationComponent } from './inscritformation.component';


@NgModule({
  declarations: [InscritformationComponent],
  imports: [
    CommonModule,
    InscritformationRoutingModule
  ]
})
export class InscritformationModule { }
