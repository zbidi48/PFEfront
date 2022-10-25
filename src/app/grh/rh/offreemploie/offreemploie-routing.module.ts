import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OffreemploieComponent} from "./offreemploie.component";

const routes: Routes = [
  {path:'',component:OffreemploieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffreemploieRoutingModule { }
