import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddformationComponent} from "./addformation.component";

const routes: Routes = [
  {path:'',component:AddformationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddformationRoutingModule { }
