import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddnotedefraieRoutingModule } from './addnotedefraie-routing.module';
import { AddnotedefraieComponent } from './addnotedefraie.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddnotedefraieComponent],
    imports: [
        CommonModule,
        AddnotedefraieRoutingModule,
        ReactiveFormsModule
    ]
})
export class AddnotedefraieModule { }
