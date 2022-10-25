import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichdepaieRoutingModule } from './fichdepaie-routing.module';
import { FichdepaieComponent } from './fichdepaie.component';


@NgModule({
  declarations: [FichdepaieComponent],
  imports: [
    CommonModule,
    FichdepaieRoutingModule
  ]
})
export class FichdepaieModule { }
