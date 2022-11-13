import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListemployeeRoutingModule } from './listemployee-routing.module';
import { ListemployeeComponent } from './listemployee.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ListemployeeComponent],
    imports: [
        CommonModule,
        ListemployeeRoutingModule,
        ReactiveFormsModule
    ]
})
export class ListemployeeModule { }
