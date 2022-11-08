import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'presenceemply',loadChildren: () => import('./presence/presence.module').then(m => m.PresenceModule)},
  {path:'addpresence',loadChildren: () => import('./addpresence/addpresence.module').then(m => m.AddpresenceModule)},
  {path:'congeemployee',loadChildren: () => import('./conge/conge.module').then(m => m.CongeModule)},
  {path:'addconge',loadChildren: () => import('./addconge/addconge.module').then(m => m.AddcongeModule)},
  {path:'visa',loadChildren: () => import('./visa/visa.module').then(m => m.VisaModule)},
  {path:'notedefraie',loadChildren: () => import('./notedefraie/notedefraie.module')
      .then(m => m.NotedefraieModule)},
  {path:'addnotedefraie',loadChildren: () => import('./addnotedefraie/addnotedefraie.module')
      .then(m => m.AddnotedefraieModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
