import { Component } from '@angular/core';
import { HEROES } from 'src/app/data/mock';
import { Hero } from 'src/app/interfaces/hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  heroesList: Hero[] = HEROES;
  selectedHero!: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
