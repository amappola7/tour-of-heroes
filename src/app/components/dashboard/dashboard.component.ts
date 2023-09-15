import { Component } from '@angular/core';
import { HEROES } from 'src/app/data/mock';
import { Hero } from 'src/app/interfaces/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  topHeroes: Hero[] = HEROES;
}
