import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 {path:'visa',loadChildren: () => import('./visa/visa.module').then(m => m.VisaModule)},
  {path:'accordvisa/:id',loadChildren: () => import('./accordvisa/accordvisa.module')
      .then(m => m.AccordvisaModule)},
 //{path:'addvisa',loadChildren: () => import('./addvisa/addvisa.module').then(m => m.AddvisaModule)},
  {path:'fichdepaie',loadChildren: () => import('./fichdepaie/fichdepaie.module').
    then(m => m.FichdepaieModule)},
  {path:'addfichdepaie',loadChildren: () => import('./addfichdepaie/addfichdepaie.module').
    then(m => m.AddfichdepaieModule)},
  {path:'editfichedepaie/:id',loadChildren: () => import('./editfichedepaie/editfichedepaie.module').
    then(m => m.EditfichedepaieModule)},
  {path:'formation',loadChildren: () => import('./formation/formation.module').
    then(m => m.FormationModule)},
  {path:'addformation',loadChildren: () => import('./addformation/addformation.module').
    then(m => m.AddformationModule)},
  {path:'editformation/:id',loadChildren: () => import('./editformation/editformation.module').
    then(m => m.EditformationModule)},
  {path:'inscritformation',loadChildren: () => import('./inscritformation/inscritformation.module').
    then(m => m.InscritformationModule)},
  {path:'detaillinscritformation/:id',loadChildren: () => import('./detaillinscritformation/detaillinscritformation.module').
    then(m => m.DetaillinscritformationModule)},
  {path:'entretient',loadChildren: () => import('./entretient/entretient.module').
    then(m => m.EntretientModule)},
  {path:'addentretient/:id',loadChildren: () => import('./addentretient/addentretient.module').
    then(m => m.AddentretientModule)},
  {path:'editentretient/:id',loadChildren: () => import('./editentretient/editentretient.module').
    then(m => m.EditentretientModule)},
  {path:'contrat',loadChildren: () => import('./contrat/contrat.module').
    then(m => m.ContratModule)},
  {path:'addcontrat',loadChildren: () => import('./addcontrat/addcontrat.module').
    then(m => m.AddcontratModule)},
  {path:'editcontrat/:id',loadChildren: () => import('./editcontrat/editcontrat.module').
    then(m => m.EditcontratModule)},
  {path:'offreemploie',loadChildren: () => import('./offreemploie/offreemploie.module').
    then(m => m.OffreemploieModule)},
  {path:'addoffreemploie',loadChildren: () => import('./addoffreemploie/addoffreemploie.module')
      .then(m => m.AddoffreemploieModule)},
  {path:'editoffreemploie/:id',loadChildren: () => import('./editoffreemploie/editoffreemploie.module').
    then(m => m.EditoffreemploieModule)},
  {path:'conge',loadChildren: () => import('./conge/conge.module').then(m => m.CongeModule)},
  {path:'accordconge/:id',loadChildren: () => import('./accordconge/accordconge.module')
      .then(m => m.AccordcongeModule)},
  {path:'notedefraie',loadChildren: () => import('./notedefraie/notedefraie.module').
    then(m => m.NotedefraieModule)},
  {path:'candidatinfo',loadChildren: () => import('./candidatinfo/candidatinfo.module').
    then(m => m.CandidatinfoModule)},
  {path:'candidatdetail/:id',loadChildren: () => import('./candidatdetail/candidatdetail.module').
    then(m => m.CandidatdetailModule)},
  {path:'sendmail/:id',loadChildren: () => import('./sendmail/sendmail.module').
    then(m => m.SendmailModule)},
  {path:'sendrefumail/:id',loadChildren: () => import('./sendmailrefus/sendmailrefus.module').
    then(m => m.SendmailrefusModule)},
  {path:'creationemployee',loadChildren: () => import('./creationemployee/creationemployee.module').
    then(m => m.CreationemployeeModule)},
  {path:'listemployee',loadChildren: () => import('./listemployee/listemployee.module').
    then(m => m.ListemployeeModule)},
  {path:'editemployee/:id',loadChildren: () => import('./editemployee/editemployee.module').
    then(m => m.EditemployeeModule)},
  {path:'detailemployee/:id',loadChildren: () => import('./detailemployee/detailemployee.module').
    then(m => m.DetailemployeeModule)},
  {path:'inscritoffre',loadChildren: () => import('./inscritoffremploie/inscritoffremploie.module').
    then(m => m.InscritoffremploieModule)},
  {path:'detaillinscritoffre/:id',loadChildren: () => import('./detailloffreinscrit/detailloffreinscrit.module').
    then(m => m.DetailloffreinscritModule)},
  {path:'meeting',loadChildren: () => import('./meeting/meeting.module').
    then(m => m.MeetingModule)},
  {path:'addmeeting',loadChildren: () => import('./addmeeting/addmeeting.module').
    then(m => m.AddmeetingModule)},
  {path:'editmeeting/:id',loadChildren: () => import('./editmeeting/editmeeting.module').
    then(m => m.EditmeetingModule)},
  {path:'dashboard',loadChildren: () => import('./dashboard/dashboard.module').
    then(m => m.DashboardModule)},
  {path:'dashboardinfo',loadChildren: () => import('./daschboradinfo/daschboradinfo.module').
    then(m => m.DaschboradinfoModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RhRoutingModule { }
