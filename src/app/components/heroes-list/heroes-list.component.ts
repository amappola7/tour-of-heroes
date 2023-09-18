import { Component } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HeroStaticService } from 'src/app/services/hero-static.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  heroesList: Hero[] = [];
  selectedHero!: Hero;

  constructor(private heroStaticService: HeroStaticService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesList = this.heroStaticService.getHeroes();
  }
}
