import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetaillinscritformationComponent} from "./detaillinscritformation.component";

const routes: Routes = [
  {path:'',component:DetaillinscritformationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetaillinscritformationRoutingModule { }
