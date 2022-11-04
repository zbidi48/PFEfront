import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidatinfoComponent} from "./candidatinfo.component";

const routes: Routes = [
  {path:'',component:CandidatinfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatinfoRoutingModule { }
