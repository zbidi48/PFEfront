import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongeRoutingModule } from './conge-routing.module';
import { CongeComponent } from './conge.component';


@NgModule({
  declarations: [CongeComponent],
  imports: [
    CommonModule,
    CongeRoutingModule
  ]
})
export class CongeModule { }
