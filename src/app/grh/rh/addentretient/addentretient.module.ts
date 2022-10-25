import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddentretientRoutingModule } from './addentretient-routing.module';
import { AddentretientComponent } from './addentretient.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddentretientComponent],
  imports: [
    CommonModule,
    AddentretientRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddentretientModule { }
