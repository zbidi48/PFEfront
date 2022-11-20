import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditmeetingRoutingModule } from './editmeeting-routing.module';
import { EditmeetingComponent } from './editmeeting.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [EditmeetingComponent],
  imports: [
    CommonModule,
    EditmeetingRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditmeetingModule { }
