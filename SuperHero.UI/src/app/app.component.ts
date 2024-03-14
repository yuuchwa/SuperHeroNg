import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';
import { HttpClientModule } from '@angular/common/http';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, EditHeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SuperHero.UI';

  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit() : void {
    console.log("sendet");
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
