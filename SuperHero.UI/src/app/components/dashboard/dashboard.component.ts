import { Component, OnInit } from '@angular/core';
import { MyUppercasePipe } from '../../pipes/my-uppercase.pipe';
import { SuperHeroService } from '../../services/super-hero.service';
import { SuperHero } from '../../models/super-hero';
import { EditHeroComponent } from '../edit-hero/edit-hero.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MyUppercasePipe, EditHeroComponent, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit() : void {
    this.superHeroService
      .getSuperHeroes()
      .subscribe((result: SuperHero[]) => this.heroes = result);
    console.log(this.heroes)
  }

  initNewHero() {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }
}
