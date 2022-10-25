import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreemploieRoutingModule } from './offreemploie-routing.module';
import { OffreemploieComponent } from './offreemploie.component';


@NgModule({
  declarations: [OffreemploieComponent],
  imports: [
    CommonModule,
    OffreemploieRoutingModule
  ]
})
export class OffreemploieModule { }
