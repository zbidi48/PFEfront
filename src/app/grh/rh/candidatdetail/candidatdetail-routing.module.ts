import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidatdetailComponent} from "./candidatdetail.component";

const routes: Routes = [
  {path:'',component:CandidatdetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatdetailRoutingModule { }
