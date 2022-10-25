import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditfichedepaieRoutingModule } from './editfichedepaie-routing.module';
import { EditfichedepaieComponent } from './editfichedepaie.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [EditfichedepaieComponent],
    imports: [
        CommonModule,
        EditfichedepaieRoutingModule,
        ReactiveFormsModule
    ]
})
export class EditfichedepaieModule { }
