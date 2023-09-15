import { Component } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  hero: Hero = {
    id: 0,
    name: 'Batman',
    universe: 'DC',
    score: 123,
    temporalNewName: 'Batman',
    temporalNewUniverse: 'DC'
  }
}