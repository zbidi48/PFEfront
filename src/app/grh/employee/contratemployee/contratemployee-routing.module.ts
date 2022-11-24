import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContratemployeeComponent} from "./contratemployee.component";

const routes: Routes = [
  {path:'',component:ContratemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratemployeeRoutingModule { }
