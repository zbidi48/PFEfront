import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddmeetingRoutingModule } from './addmeeting-routing.module';
import { AddmeetingComponent } from './addmeeting.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddmeetingComponent],
  imports: [
    CommonModule,
    AddmeetingRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddmeetingModule { }
