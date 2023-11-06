import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { slider } from './animations-router';
import { HomelanderComponent } from './components/homelander/homelander.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';
import { PresencesComponent } from './components/presences/presences.component';
import { MarkPresenceComponent } from './components/mark-presence/mark-presence.component';
import { NewSoulComponent } from './components/new-soul/new-soul.component';
import { BmcoffeeComponent } from './components/bmcoffee/bmcoffee.component';



const routes: Routes = [
  {path:'',component:HomelanderComponent},
  {path:'presences',component:PresencesComponent},
  {path:'mark-presence',component:MarkPresenceComponent},
  {path:'new-soul',component:NewSoulComponent},
  {path:'bm-coffee',component:BmcoffeeComponent},
  {path:'home',component:HomepageComponent,data:{animation:'isBottom'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
