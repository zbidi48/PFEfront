import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FichdepaieComponent} from "./fichdepaie.component";

const routes: Routes = [
  {path:'',component:FichdepaieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichdepaieRoutingModule { }
