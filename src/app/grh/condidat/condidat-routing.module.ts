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
      .then(m => m.DetailoffreModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondidatRoutingModule { }
