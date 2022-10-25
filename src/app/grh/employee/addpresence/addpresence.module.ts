import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddpresenceRoutingModule } from './addpresence-routing.module';
import { AddpresenceComponent } from './addpresence.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddpresenceComponent],
  imports: [
    CommonModule,
    AddpresenceRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddpresenceModule { }
