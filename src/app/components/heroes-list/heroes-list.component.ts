import { Component } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HeroStaticService } from 'src/app/services/hero-static.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  heroesList: Hero[] = [];
  selectedHero!: Hero;

  constructor(private heroStaticService: HeroStaticService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesList = this.heroStaticService.getHeroes();
  }

  onSelectHero(selectedHero: Hero): void {
    this.selectedHero = selectedHero;
    this.messageService.addMessage(`Heroes List component: Selected hero id = ${selectedHero.id}, name = ${selectedHero.name}`)
  }
}
