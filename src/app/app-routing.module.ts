import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LacrosseComponent } from './sports/lacrosse/lacrosse.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RunningComponent } from './sports/running/running.component';
import { BadmintonComponent } from './sports/badminton/badminton.component';
import { VoleyballComponent } from './sports/voleyball/voleyball.component';
import { EsportComponent } from './sports/esport/esport.component';
import { FootballComponent } from './sports/football/football.component';
import { BoxingComponent } from './sports/boxing/boxing.component';
import { HandballComponent } from './sports/handball/handball.component';

const routes: Routes = [
  { path: 'badminton', component: BadmintonComponent },
  { path: 'boxing', component: BoxingComponent },
  { path: 'esport', component: EsportComponent },
  { path: 'football', component: FootballComponent },
  { path: 'handball', component: HandballComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lacrosse', component: LacrosseComponent },
  { path: 'running', component: RunningComponent },
  { path: 'volleyball', component: VoleyballComponent },
  // Last routes to be defined to avoid conflicts
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
