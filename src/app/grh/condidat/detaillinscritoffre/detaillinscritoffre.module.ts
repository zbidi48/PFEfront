import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetaillinscritoffreRoutingModule } from './detaillinscritoffre-routing.module';
import { DetaillinscritoffreComponent } from './detaillinscritoffre.component';


@NgModule({
  declarations: [DetaillinscritoffreComponent],
  imports: [
    CommonModule,
    DetaillinscritoffreRoutingModule
  ]
})
export class DetaillinscritoffreModule { }
