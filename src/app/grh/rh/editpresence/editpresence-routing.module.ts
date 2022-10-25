import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditpresenceComponent} from "./editpresence.component";

const routes: Routes = [
  {path:'',component:EditpresenceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditpresenceRoutingModule { }
