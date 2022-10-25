import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplayoffreemploieRoutingModule } from './applayoffreemploie-routing.module';
import { ApplayoffreemploieComponent } from './applayoffreemploie.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ApplayoffreemploieComponent],
    imports: [
        CommonModule,
        ApplayoffreemploieRoutingModule,
        ReactiveFormsModule
    ]
})
export class ApplayoffreemploieModule { }
