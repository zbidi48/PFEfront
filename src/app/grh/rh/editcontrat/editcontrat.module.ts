import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditcontratRoutingModule } from './editcontrat-routing.module';
import { EditcontratComponent } from './editcontrat.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [EditcontratComponent],
    imports: [
        CommonModule,
        EditcontratRoutingModule,
        ReactiveFormsModule
    ]
})
export class EditcontratModule { }
