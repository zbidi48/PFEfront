import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddnotedefraieComponent} from "./addnotedefraie.component";

const routes: Routes = [
  {path:'',component:AddnotedefraieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddnotedefraieRoutingModule { }
