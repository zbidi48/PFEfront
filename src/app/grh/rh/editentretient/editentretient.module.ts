import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditentretientRoutingModule } from './editentretient-routing.module';
import { EditentretientComponent } from './editentretient.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [EditentretientComponent],
  imports: [
    CommonModule,
    EditentretientRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditentretientModule { }
