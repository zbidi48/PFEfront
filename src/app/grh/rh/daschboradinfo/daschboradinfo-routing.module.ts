import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DaschboradinfoComponent} from "./daschboradinfo.component";

const routes: Routes = [
  {path:'',component:DaschboradinfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaschboradinfoRoutingModule { }
