import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreationemployeeRoutingModule } from './creationemployee-routing.module';
import { CreationemployeeComponent } from './creationemployee.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [CreationemployeeComponent],
    imports: [
        CommonModule,
        CreationemployeeRoutingModule,
        ReactiveFormsModule
    ]
})
export class CreationemployeeModule { }
