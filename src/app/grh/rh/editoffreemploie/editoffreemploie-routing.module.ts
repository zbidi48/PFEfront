import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditoffreemploieComponent} from "./editoffreemploie.component";

const routes: Routes = [
  {path:'',component:EditoffreemploieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditoffreemploieRoutingModule { }
