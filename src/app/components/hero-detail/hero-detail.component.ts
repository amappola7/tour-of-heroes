import { Component } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroStaticService } from 'src/app/services/hero-static.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  hero!: Hero;

  constructor(
    private currentRoute: ActivatedRoute,
    private heroService: HeroStaticService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.hero = this.getHero();
  }

  getHero(): Hero {
    const id = Number(this.currentRoute.snapshot.paramMap.get('id'));
    return this.heroService.getHeroById(id);
  }

  goBack(): void {
    this.location.back();
  }
}