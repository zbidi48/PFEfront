import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InscritoffremploieComponent} from "./inscritoffremploie.component";

const routes: Routes = [
  {path:'',component:InscritoffremploieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscritoffremploieRoutingModule { }
