import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InscritoffrecandidatComponent} from "./inscritoffrecandidat.component";

const routes: Routes = [
  {
    path:'',component:InscritoffrecandidatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscritoffrecandidatRoutingModule { }
