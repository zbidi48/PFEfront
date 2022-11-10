import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SendmailrefusComponent} from "./sendmailrefus.component";

const routes: Routes = [
  {path:'',component:SendmailrefusComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendmailrefusRoutingModule { }
