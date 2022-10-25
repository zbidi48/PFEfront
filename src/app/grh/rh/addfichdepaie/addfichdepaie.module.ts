import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddfichdepaieRoutingModule } from './addfichdepaie-routing.module';
import { AddfichdepaieComponent } from './addfichdepaie.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddfichdepaieComponent],
    imports: [
        CommonModule,
        AddfichdepaieRoutingModule,
        ReactiveFormsModule
    ]
})
export class AddfichdepaieModule { }
