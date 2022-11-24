import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FichedepaieemployeeComponent} from "./fichedepaieemployee.component";

const routes: Routes = [
  {path:'',component:FichedepaieemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichedepaieemployeeRoutingModule { }
