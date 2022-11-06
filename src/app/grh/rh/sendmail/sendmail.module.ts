import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendmailRoutingModule } from './sendmail-routing.module';
import { SendmailComponent } from './sendmail.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [SendmailComponent],
    imports: [
        CommonModule,
        SendmailRoutingModule,
        ReactiveFormsModule
    ]
})
export class SendmailModule { }
