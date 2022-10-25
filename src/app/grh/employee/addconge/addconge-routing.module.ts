import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddcongeComponent} from "./addconge.component";

const routes: Routes = [
  {path:'',component:AddcongeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddcongeRoutingModule { }
