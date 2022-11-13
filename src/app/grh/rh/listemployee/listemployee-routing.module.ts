import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListemployeeComponent} from "./listemployee.component";

const routes: Routes = [
  {path:'',component:ListemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListemployeeRoutingModule { }
