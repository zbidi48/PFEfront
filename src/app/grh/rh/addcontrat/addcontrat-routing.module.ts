import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddcontratComponent} from "./addcontrat.component";

const routes: Routes = [
  {path:'',component:AddcontratComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddcontratRoutingModule { }
