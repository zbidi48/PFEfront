import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CongeComponent} from "./conge.component";


const routes: Routes = [
  {path:'',component:CongeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongeRoutingModule { }
