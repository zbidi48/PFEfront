import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendmailrefusRoutingModule } from './sendmailrefus-routing.module';
import { SendmailrefusComponent } from './sendmailrefus.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [SendmailrefusComponent],
    imports: [
        CommonModule,
        SendmailrefusRoutingModule,
        ReactiveFormsModule
    ]
})
export class SendmailrefusModule { }
