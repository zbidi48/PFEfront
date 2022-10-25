import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { FormationComponent } from './formation.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [FormationComponent],
  imports: [
    CommonModule,
    FormationRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormationModule { }
