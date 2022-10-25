import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddvisaComponent} from "./addvisa.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: AddvisaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AddvisaRoutingModule { }
