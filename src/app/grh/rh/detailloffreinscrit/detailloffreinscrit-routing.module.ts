import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailloffreinscritComponent} from "./detailloffreinscrit.component";

const routes: Routes = [
  {path:'',component:DetailloffreinscritComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailloffreinscritRoutingModule { }
