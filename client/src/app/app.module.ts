import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AccueilComponent } from './accueil/accueil.component';
import { RejoindreComponent } from './rejoindre/rejoindre.component';

import { KitchenSvgComponent } from '../assets/svg/kitchen/kitchen.component';
import { doorSvgComponent } from '../assets/svg/door/door.component';
import { sinkSvgComponent } from '../assets/svg/sink/sink.component';
import { soumissionSvgComponent } from '../assets/svg/soumission/soumission.component';
import { stairsSvgComponent } from '../assets/svg/stairs/stairs.component';
import { MaterialModule } from './material/material.module';
import { ProjetsComponent } from './projets/projets.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RejoindreComponent,
    KitchenSvgComponent,
    doorSvgComponent,
    sinkSvgComponent,
    soumissionSvgComponent,
    stairsSvgComponent,
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
