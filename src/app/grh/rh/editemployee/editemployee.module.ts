import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditemployeeRoutingModule } from './editemployee-routing.module';
import { EditemployeeComponent } from './editemployee.component';


@NgModule({
  declarations: [EditemployeeComponent],
  imports: [
    CommonModule,
    EditemployeeRoutingModule
  ]
})
export class EditemployeeModule { }
