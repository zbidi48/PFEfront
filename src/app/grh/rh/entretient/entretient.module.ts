import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntretientRoutingModule } from './entretient-routing.module';
import { EntretientComponent } from './entretient.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [EntretientComponent],
    imports: [
        CommonModule,
        EntretientRoutingModule,
        ReactiveFormsModule
    ]
})
export class EntretientModule { }
