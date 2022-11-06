import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisaRoutingModule } from './visa-routing.module';
import { VisaComponent } from './visa.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [VisaComponent],
    imports: [
        CommonModule,
        VisaRoutingModule,
        ReactiveFormsModule
    ]
})
export class VisaModule { }
