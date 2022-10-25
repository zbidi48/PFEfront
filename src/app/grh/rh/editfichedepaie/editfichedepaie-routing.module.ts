import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditfichedepaieComponent} from "./editfichedepaie.component";

const routes: Routes = [
  {path:'',component:EditfichedepaieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditfichedepaieRoutingModule { }
