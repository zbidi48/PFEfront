import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetaillinscritoffreComponent} from "./detaillinscritoffre.component";

const routes: Routes = [
  {path:'',component:DetaillinscritoffreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetaillinscritoffreRoutingModule { }
