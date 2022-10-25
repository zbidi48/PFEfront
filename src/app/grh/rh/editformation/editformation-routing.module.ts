import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditformationComponent} from "./editformation.component";

const routes: Routes = [
  {path:'',component:EditformationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditformationRoutingModule { }
