import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddfichdepaieComponent} from "./addfichdepaie.component";

const routes: Routes = [{path:'',component:AddfichdepaieComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddfichdepaieRoutingModule { }
