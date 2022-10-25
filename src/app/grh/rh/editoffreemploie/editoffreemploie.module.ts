import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditoffreemploieRoutingModule } from './editoffreemploie-routing.module';
import { EditoffreemploieComponent } from './editoffreemploie.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [EditoffreemploieComponent],
    imports: [
        CommonModule,
        EditoffreemploieRoutingModule,
        ReactiveFormsModule
    ]
})
export class EditoffreemploieModule { }
