import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresenceRoutingModule } from './presence-routing.module';
import { PresenceComponent } from './presence.component';


@NgModule({
  declarations: [PresenceComponent],
  imports: [
    CommonModule,
    PresenceRoutingModule
  ]
})
export class PresenceModule { }
