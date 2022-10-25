import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddoffreemploieRoutingModule } from './addoffreemploie-routing.module';
import { AddoffreemploieComponent } from './addoffreemploie.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddoffreemploieComponent],
    imports: [
        CommonModule,
        AddoffreemploieRoutingModule,
        ReactiveFormsModule
    ]
})
export class AddoffreemploieModule { }
