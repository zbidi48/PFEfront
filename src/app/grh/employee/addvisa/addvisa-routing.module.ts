import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddvisaComponent} from "./addvisa.component";

const routes: Routes = [
  {path:'',component:AddvisaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddvisaRoutingModule { }
