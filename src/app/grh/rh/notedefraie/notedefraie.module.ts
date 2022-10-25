import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotedefraieRoutingModule } from './notedefraie-routing.module';
import { NotedefraieComponent } from './notedefraie.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [NotedefraieComponent],
    imports: [
        CommonModule,
        NotedefraieRoutingModule,
        ReactiveFormsModule
    ]
})
export class NotedefraieModule { }
