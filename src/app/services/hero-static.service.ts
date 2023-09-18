import { Injectable } from '@angular/core';
import { HEROES } from '../data/mock';
import { Hero } from '../interfaces/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroStaticService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Hero[] {
    this.messageService.addMessage('Hero Service: List of heroes fetched');
    return HEROES
  }

  getTopHeroes(minScore: number): Hero[] {
    this.messageService.addMessage('Hero Service: List of top heroes fetched')
    return HEROES.filter((hero: Hero) => hero.score > minScore);
  }
}
