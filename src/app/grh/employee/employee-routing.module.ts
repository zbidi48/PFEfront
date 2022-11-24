import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'congeemployee',loadChildren: () => import('./conge/conge.module').then(m => m.CongeModule)},
  {path:'addconge',loadChildren: () => import('./addconge/addconge.module').then(m => m.AddcongeModule)},
  {path:'visa',loadChildren: () => import('./visa/visa.module').then(m => m.VisaModule)},
  {path:'notedefraie',loadChildren: () => import('./notedefraie/notedefraie.module')
      .then(m => m.NotedefraieModule)},
  {path:'addvisa',loadChildren: () => import('./addvisa/addvisa.module')
      .then(m => m.AddvisaModule)},
  {path:'addnotedefraie',loadChildren: () => import('./addnotedefraie/addnotedefraie.module')
      .then(m => m.AddnotedefraieModule)},
  {path:'editnotedefraie/:id',loadChildren: () => import('./editnotedefraie/editnotedefraie.module')
      .then(m => m.EditnotedefraieModule)},
  {path:'formationemployee',loadChildren: () => import('./formationemployee/formationemployee.module')
      .then(m => m.FormationemployeeModule)},
  {path:'contratemployee',loadChildren: () => import('./contratemployee/contratemployee.module')
      .then(m => m.ContratemployeeModule)},
  {path:'fichedepaieemployee',loadChildren: () => import('./fichedepaieemployee/fichedepaieemployee.module')
      .then(m => m.FichedepaieemployeeModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
