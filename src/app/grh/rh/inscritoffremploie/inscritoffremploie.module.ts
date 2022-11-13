import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscritoffremploieRoutingModule } from './inscritoffremploie-routing.module';
import { InscritoffremploieComponent } from './inscritoffremploie.component';


@NgModule({
  declarations: [InscritoffremploieComponent],
  imports: [
    CommonModule,
    InscritoffremploieRoutingModule
  ]
})
export class InscritoffremploieModule { }
