import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddpresenceComponent} from "./addpresence.component";

const routes: Routes = [
  {path:'',component:AddpresenceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddpresenceRoutingModule { }
