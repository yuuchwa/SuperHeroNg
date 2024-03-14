import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuperHero } from '../../models/super-hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-hero.component.html',
  styleUrl: './edit-hero.component.css'
})
export class EditHeroComponent {
  @Input() hero?: SuperHero;
  @Output() herosUpdated = new EventEmitter<SuperHero[]>();

  constructor(private superHeroService: SuperHeroService) { }

  public createHero(hero: SuperHero) {
    this.superHeroService
      .createSuperHeroes(hero)
      .subscribe(
        (heroes: SuperHero[]) => this.herosUpdated.emit(heroes))
  }

  public updateHero(hero: SuperHero) {
    this.superHeroService
      .updateSuperHeroes(hero)
      .subscribe(
        (heroes: SuperHero[]) => this.herosUpdated.emit(heroes))
  }

  public deleteHero(hero: SuperHero) {
    this.superHeroService
      .deleteSuperHeroes(hero)
      .subscribe(
        (heroes: SuperHero[]) => this.herosUpdated.emit(heroes))
  }
}
