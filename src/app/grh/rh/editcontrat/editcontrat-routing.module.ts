import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditcontratComponent} from "./editcontrat.component";

const routes: Routes = [
  {path:'',component:EditcontratComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditcontratRoutingModule { }
