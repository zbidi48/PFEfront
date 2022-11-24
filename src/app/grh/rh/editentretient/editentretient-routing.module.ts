import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditentretientComponent} from "./editentretient.component";

const routes: Routes = [
  {path:'',component:EditentretientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditentretientRoutingModule { }
