import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditformationRoutingModule } from './editformation-routing.module';
import { EditformationComponent } from './editformation.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [EditformationComponent],
    imports: [
        CommonModule,
        EditformationRoutingModule,
        ReactiveFormsModule
    ]
})
export class EditformationModule { }
