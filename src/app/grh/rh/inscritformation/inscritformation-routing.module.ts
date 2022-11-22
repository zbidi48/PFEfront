import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InscritformationComponent} from "./inscritformation.component";

const routes: Routes = [
  {path:'',component:InscritformationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscritformationRoutingModule { }
