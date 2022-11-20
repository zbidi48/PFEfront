import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditemployeeComponent} from "./editemployee.component";

const routes: Routes = [
  {path:'',component:EditemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditemployeeRoutingModule { }
