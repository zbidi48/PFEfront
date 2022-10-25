import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormationComponent} from "./formation.component";

const routes: Routes = [
  {path:'',component:FormationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
