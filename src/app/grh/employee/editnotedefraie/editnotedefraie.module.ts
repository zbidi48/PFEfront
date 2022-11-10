import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditnotedefraieRoutingModule } from './editnotedefraie-routing.module';
import { EditnotedefraieComponent } from './editnotedefraie.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [EditnotedefraieComponent],
    imports: [
        CommonModule,
        EditnotedefraieRoutingModule,
        ReactiveFormsModule
    ]
})
export class EditnotedefraieModule { }
