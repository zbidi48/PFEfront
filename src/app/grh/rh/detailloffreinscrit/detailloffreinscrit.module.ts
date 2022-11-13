import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailloffreinscritRoutingModule } from './detailloffreinscrit-routing.module';
import { DetailloffreinscritComponent } from './detailloffreinscrit.component';


@NgModule({
  declarations: [DetailloffreinscritComponent],
  imports: [
    CommonModule,
    DetailloffreinscritRoutingModule
  ]
})
export class DetailloffreinscritModule { }
