import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LacrosseComponent } from './sports/lacrosse/lacrosse.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RunningComponent } from './sports/running/running.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BadmintonComponent } from './sports/badminton/badminton.component';
import { VoleyballComponent } from './sports/voleyball/voleyball.component';
import { FootballComponent } from './sports/football/football.component';
import { BoxingComponent } from './sports/boxing/boxing.component';
import { HandballComponent } from './sports/handball/handball.component';
import { EsportComponent } from './sports/esport/esport.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LacrosseComponent,
    PageNotFoundComponent,
    RunningComponent,
    BadmintonComponent,
    VoleyballComponent,
    FootballComponent,
    BoxingComponent,
    HandballComponent,
    EsportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
