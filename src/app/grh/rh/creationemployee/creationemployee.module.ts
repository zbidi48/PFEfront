import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreationemployeeRoutingModule } from './creationemployee-routing.module';
import { CreationemployeeComponent } from './creationemployee.component';


@NgModule({
  declarations: [CreationemployeeComponent],
  imports: [
    CommonModule,
    CreationemployeeRoutingModule
  ]
})
export class CreationemployeeModule { }
