import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditemployeeRoutingModule } from './editemployee-routing.module';
import { EditemployeeComponent } from './editemployee.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [EditemployeeComponent],
    imports: [
        CommonModule,
        EditemployeeRoutingModule,
        ReactiveFormsModule
    ]
})
export class EditemployeeModule { }
