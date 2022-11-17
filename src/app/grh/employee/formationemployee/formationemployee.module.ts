import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationemployeeRoutingModule } from './formationemployee-routing.module';
import { FormationemployeeComponent } from './formationemployee.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [FormationemployeeComponent],
    imports: [
        CommonModule,
        FormationemployeeRoutingModule,
        ReactiveFormsModule
    ]
})
export class FormationemployeeModule { }
