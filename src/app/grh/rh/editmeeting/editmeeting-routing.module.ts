import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditmeetingComponent} from "./editmeeting.component";

const routes: Routes = [
  {path:'',component:EditmeetingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditmeetingRoutingModule { }
