import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RejoindreComponent } from './rejoindre/rejoindre.component';
import { KitchenSvgComponent } from '../assets/svg/kitchen/kitchen.component';
import { doorSvgComponent } from '../assets/svg/door/door.component';
import { sinkSvgComponent } from '../assets/svg/sink/sink.component';
import { soumissionSvgComponent } from '../assets/svg/soumission/soumission.component';
import { stairsSvgComponent } from '../assets/svg/stairs/stairs.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
