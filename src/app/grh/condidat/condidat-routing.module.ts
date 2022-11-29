import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AComponent} from "./a/a.component";
import {BComponent} from "./b/b.component";

const routes: Routes = [
  {path:'a', component:AComponent},
  {path:'b', component:BComponent},
  {path:'offreemploie',loadChildren: () => import('./offreemploie/offreemploie.module')
      .then(m => m.OffreemploieModule)},
  {path:'detailoffre/:id',loadChildren: () => import('./detailoffre/detailoffre.module')
      .then(m => m.DetailoffreModule)},
  {path:'inscritoffre',loadChildren: () => import('./inscritoffrecandidat/inscritoffrecandidat.module')
      .then(m => m.InscritoffrecandidatModule)},
  {path:'detailinscritoffre/:id',loadChildren: () => import('./detaillinscritoffre/detaillinscritoffre.module')
      .then(m => m.DetaillinscritoffreModule)},
  {path:'entretient',loadChildren: () => import('./entretient/entretient.module')
      .then(m => m.EntretientModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondidatRoutingModule { }
