import { Component } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HeroStaticService } from 'src/app/services/hero-static.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  topHeroes: Hero[] = [];
  selectedHero!: Hero;

  constructor(private heroStaticService: HeroStaticService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.topHeroes = this.heroStaticService.getTopHeroes(1000);
  }

  onSelectHero(selectedHero: Hero): void {
    this.selectedHero = selectedHero;
    this.messageService.addMessage(`Dashboard component: Selected hero id = ${selectedHero.id}, name = ${selectedHero.name}`)
  }
}
