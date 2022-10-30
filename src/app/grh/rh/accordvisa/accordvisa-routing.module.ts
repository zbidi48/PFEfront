import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccordvisaComponent} from "./accordvisa.component";

const routes: Routes = [
  {path:'',component:AccordvisaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccordvisaRoutingModule { }
