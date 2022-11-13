import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailemployeeComponent} from "./detailemployee.component";

const routes: Routes = [
  {path:'',component:DetailemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailemployeeRoutingModule { }
