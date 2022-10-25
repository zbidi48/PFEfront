import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordcongeRoutingModule } from './accordconge-routing.module';
import { AccordcongeComponent } from './accordconge.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AccordcongeComponent],
    imports: [
        CommonModule,
        AccordcongeRoutingModule,
        ReactiveFormsModule
    ]
})
export class AccordcongeModule { }
