import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresenceRoutingModule } from './presence-routing.module';
import { PresenceComponent } from './presence.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [PresenceComponent],
    imports: [
        CommonModule,
        PresenceRoutingModule,
        ReactiveFormsModule
    ]
})
export class PresenceModule { }
