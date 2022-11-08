import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongeRoutingModule } from './conge-routing.module';
import { CongeComponent } from './conge.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [CongeComponent],
    imports: [
        CommonModule,
        CongeRoutingModule,
        ReactiveFormsModule
    ]
})
export class CongeModule { }
