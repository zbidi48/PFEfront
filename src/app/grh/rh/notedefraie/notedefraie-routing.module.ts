import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotedefraieComponent} from "./notedefraie.component";

const routes: Routes = [
  {path:'',component:NotedefraieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotedefraieRoutingModule { }
