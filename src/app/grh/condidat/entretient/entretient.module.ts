import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntretientRoutingModule } from './entretient-routing.module';
import { EntretientComponent } from './entretient.component';


@NgModule({
  declarations: [EntretientComponent],
  imports: [
    CommonModule,
    EntretientRoutingModule
  ]
})
export class EntretientModule { }
