import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondidatRoutingModule } from './condidat-routing.module';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';


@NgModule({
  declarations: [AComponent, BComponent],
  imports: [
    CommonModule,
    CondidatRoutingModule
  ]
})
export class CondidatModule { }
