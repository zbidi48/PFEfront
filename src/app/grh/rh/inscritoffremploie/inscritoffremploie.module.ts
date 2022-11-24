import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscritoffremploieRoutingModule } from './inscritoffremploie-routing.module';
import { InscritoffremploieComponent } from './inscritoffremploie.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [InscritoffremploieComponent],
    imports: [
        CommonModule,
        InscritoffremploieRoutingModule,
        ReactiveFormsModule
    ]
})
export class InscritoffremploieModule { }
