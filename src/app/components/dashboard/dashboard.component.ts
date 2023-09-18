import { Component } from '@angular/core';
import { HEROES } from 'src/app/data/mock';
import { Hero } from 'src/app/interfaces/hero';
import { HeroStaticService } from 'src/app/services/hero-static.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  topHeroes: Hero[] = [];

  constructor(private heroStaticService: HeroStaticService) {
    this.topHeroes = heroStaticService.getTopHeroes(1000);
  }
}
