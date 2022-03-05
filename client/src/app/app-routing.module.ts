import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RejoindreComponent } from './rejoindre/rejoindre.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  // { path: '', redirectTo: '/accueil', pathMatch: 'full'},
  { path: '', component: AccueilComponent },
  { path: 'rejoindre', component: RejoindreComponent },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
