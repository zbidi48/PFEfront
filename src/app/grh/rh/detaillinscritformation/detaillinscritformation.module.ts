import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetaillinscritformationRoutingModule } from './detaillinscritformation-routing.module';
import { DetaillinscritformationComponent } from './detaillinscritformation.component';


@NgModule({
  declarations: [DetaillinscritformationComponent],
  imports: [
    CommonModule,
    DetaillinscritformationRoutingModule
  ]
})
export class DetaillinscritformationModule { }
