import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplayoffreemploieComponent} from "./applayoffreemploie.component";

const routes: Routes = [
  {path:'',component:ApplayoffreemploieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplayoffreemploieRoutingModule { }
