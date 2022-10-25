import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddvisaRoutingModule } from './addvisa-routing.module';
import { AddvisaComponent } from './addvisa.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddvisaComponent],
  imports: [
    CommonModule,
    AddvisaRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddvisaModule { }
