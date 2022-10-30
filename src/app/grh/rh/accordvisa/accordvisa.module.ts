import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordvisaRoutingModule } from './accordvisa-routing.module';
import { AccordvisaComponent } from './accordvisa.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AccordvisaComponent],
    imports: [
        CommonModule,
        AccordvisaRoutingModule,
        ReactiveFormsModule
    ]
})
export class AccordvisaModule { }
