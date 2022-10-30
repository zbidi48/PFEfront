import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddvisaRoutingModule } from './addvisa-routing.module';
import { AddvisaComponent } from './addvisa.component';


@NgModule({
  declarations: [AddvisaComponent],
  imports: [
    CommonModule,
    AddvisaRoutingModule
  ]
})
export class AddvisaModule { }
