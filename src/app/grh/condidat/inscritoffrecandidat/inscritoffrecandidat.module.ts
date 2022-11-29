import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscritoffrecandidatRoutingModule } from './inscritoffrecandidat-routing.module';
import { InscritoffrecandidatComponent } from './inscritoffrecandidat.component';


@NgModule({
  declarations: [InscritoffrecandidatComponent],
  imports: [
    CommonModule,
    InscritoffrecandidatRoutingModule
  ]
})
export class InscritoffrecandidatModule { }
