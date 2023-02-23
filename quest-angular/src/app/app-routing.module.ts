import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiliereComponent } from './filiere/filiere.component';
import { FormateurComponent } from './formateur/formateur.component';
import { HomeComponent } from './home/home.component';
import { MatiereComponent } from './matiere/matiere.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: 'full'},
  {path: "stagiaire", component: StagiaireComponent},
  {path: "ordinateur", component: OrdinateurComponent},
  {path: "matiere", component: MatiereComponent},
  {path: "filiere", component: FiliereComponent},
  {path: "formateur", component: FormateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
