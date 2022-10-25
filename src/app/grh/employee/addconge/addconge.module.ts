import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcongeRoutingModule } from './addconge-routing.module';
import { AddcongeComponent } from './addconge.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddcongeComponent],
    imports: [
        CommonModule,
        AddcongeRoutingModule,
        ReactiveFormsModule
    ]
})
export class AddcongeModule { }
