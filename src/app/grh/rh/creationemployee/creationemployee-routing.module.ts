import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreationemployeeModule} from "./creationemployee.module";
import {CreationemployeeComponent} from "./creationemployee.component";

const routes: Routes = [
  {path:'',component:CreationemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreationemployeeRoutingModule { }
