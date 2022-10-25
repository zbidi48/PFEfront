import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailoffreRoutingModule } from './detailoffre-routing.module';
import { DetailoffreComponent } from './detailoffre.component';


@NgModule({
  declarations: [DetailoffreComponent],
  exports: [
    DetailoffreComponent
  ],
  imports: [
    CommonModule,
    DetailoffreRoutingModule
  ]
})
export class DetailoffreModule { }
