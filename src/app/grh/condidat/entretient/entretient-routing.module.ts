import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntretientComponent} from "./entretient.component";

const routes: Routes = [
  {path:'',component:EntretientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntretientRoutingModule { }
