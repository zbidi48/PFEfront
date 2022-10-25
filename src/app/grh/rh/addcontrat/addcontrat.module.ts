import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcontratRoutingModule } from './addcontrat-routing.module';
import { AddcontratComponent } from './addcontrat.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddcontratComponent],
    imports: [
        CommonModule,
        AddcontratRoutingModule,
        ReactiveFormsModule
    ]
})
export class AddcontratModule { }
