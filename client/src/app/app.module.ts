import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { AccueilComponent } from './accueil/accueil.component';
import { RejoindreComponent } from './rejoindre/rejoindre.component';
import { ProjetsComponent } from './projets/projets.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RejoindreComponent,
    ProjetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
