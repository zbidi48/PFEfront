import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddformationRoutingModule } from './addformation-routing.module';
import { AddformationComponent } from './addformation.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddformationComponent],
    imports: [
        CommonModule,
        AddformationRoutingModule,
        ReactiveFormsModule
    ]
})
export class AddformationModule { }
