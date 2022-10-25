import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddoffreemploieComponent} from "./addoffreemploie.component";

const routes: Routes = [
  {path:'',component:AddoffreemploieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddoffreemploieRoutingModule { }
