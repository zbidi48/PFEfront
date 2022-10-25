import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContratComponent} from "./contrat.component";

const routes: Routes = [
  {path:'',component:ContratComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
