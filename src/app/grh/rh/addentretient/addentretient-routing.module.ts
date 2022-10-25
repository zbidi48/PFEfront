import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddentretientComponent} from "./addentretient.component";

const routes: Routes = [
  {path:'',component:AddentretientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddentretientRoutingModule { }
