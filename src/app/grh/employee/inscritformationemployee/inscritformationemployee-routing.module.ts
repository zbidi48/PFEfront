import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetaillinscritformationComponent} from "../../rh/detaillinscritformation/detaillinscritformation.component";
import {InscritformationemployeeComponent} from "./inscritformationemployee.component";

const routes: Routes = [
  {path:'',component:InscritformationemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscritformationemployeeRoutingModule { }
