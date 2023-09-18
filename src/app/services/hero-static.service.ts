import { Injectable } from '@angular/core';
import { HEROES } from '../data/mock';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroStaticService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES
  }

  getTopHeroes(minScore: number): Hero[] {
    return HEROES.filter((hero: Hero) => hero.score > minScore);
  }
}
