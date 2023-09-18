import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { MessagesComponent } from './components/messages/messages.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HeroesListComponent},
  {path: 'messages', component: MessagesComponent},
  {path:'**', redirectTo:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
