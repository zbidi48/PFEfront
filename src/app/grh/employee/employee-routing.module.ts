import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'presenceemply',loadChildren: () => import('./presence/presence.module').then(m => m.PresenceModule)},
  {path:'addpresence',loadChildren: () => import('./addpresence/addpresence.module').then(m => m.AddpresenceModule)},
  {path:'congeemployee',loadChildren: () => import('./conge/conge.module').then(m => m.CongeModule)},
  {path:'addconge',loadChildren: () => import('./addconge/addconge.module').then(m => m.AddcongeModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
