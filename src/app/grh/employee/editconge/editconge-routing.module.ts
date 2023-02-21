import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditcongeComponent} from "./editconge.component";

const routes: Routes = [
  {path:'',component:EditcongeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditcongeRoutingModule { }
