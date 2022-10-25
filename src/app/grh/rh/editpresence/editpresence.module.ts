import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditpresenceRoutingModule } from './editpresence-routing.module';
import { EditpresenceComponent } from './editpresence.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [EditpresenceComponent],
    imports: [
        CommonModule,
        EditpresenceRoutingModule,
        ReactiveFormsModule
    ]
})
export class EditpresenceModule { }
