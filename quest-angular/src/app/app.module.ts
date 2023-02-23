import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { FormsModule } from '@angular/forms';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { MatiereComponent } from './matiere/matiere.component';
import { FiliereComponent } from './filiere/filiere.component';
import { FormateurComponent } from './formateur/formateur.component';
import { YesNoPipe } from './yes-no.pipe';
import { HttpClientModule }from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    StagiaireComponent,
    OrdinateurComponent,
    MatiereComponent,
    FiliereComponent,
    FormateurComponent,
    YesNoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
