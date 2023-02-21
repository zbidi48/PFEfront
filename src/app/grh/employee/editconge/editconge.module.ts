import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditcongeRoutingModule } from './editconge-routing.module';
import { EditcongeComponent } from './editconge.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [EditcongeComponent],
  imports: [
    CommonModule,
    EditcongeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditcongeModule { }
