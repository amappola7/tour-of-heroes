import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes: Routes = [
  // {path:'', redirectTo:'dashboard'},
  {path:'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HeroesListComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'details/:id', component: HeroDetailComponent},
  {path:'**', redirectTo:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
