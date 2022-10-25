import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreemploieRoutingModule } from './offreemploie-routing.module';
import { OffreemploieComponent } from './offreemploie.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [OffreemploieComponent],
    imports: [
        CommonModule,
        OffreemploieRoutingModule,
        ReactiveFormsModule
    ]
})
export class OffreemploieModule { }
