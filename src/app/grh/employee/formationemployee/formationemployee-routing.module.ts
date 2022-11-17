import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormationemployeeComponent} from "./formationemployee.component";

const routes: Routes = [
  {path:'',component:FormationemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationemployeeRoutingModule { }
