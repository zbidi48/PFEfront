import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotedefraieRoutingModule } from './notedefraie-routing.module';
import { NotedefraieComponent } from './notedefraie.component';


@NgModule({
  declarations: [NotedefraieComponent],
  imports: [
    CommonModule,
    NotedefraieRoutingModule
  ]
})
export class NotedefraieModule { }
