import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaschboradinfoRoutingModule } from './daschboradinfo-routing.module';
import { DaschboradinfoComponent } from './daschboradinfo.component';


@NgModule({
  declarations: [DaschboradinfoComponent],
  imports: [
    CommonModule,
    DaschboradinfoRoutingModule
  ]
})
export class DaschboradinfoModule { }
