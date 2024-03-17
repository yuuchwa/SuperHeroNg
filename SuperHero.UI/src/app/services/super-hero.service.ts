import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { of } from 'rxjs';
import { HEROES } from '../mock-data/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  private url = "SuperHero";
  private fullUrl = "http://localhost:5230/api/SuperHero";
  private heroes: SuperHero[] = [];
  private useMockup = true;

  constructor(private http: HttpClient) { }

  public getSuperHeroes() : Observable<SuperHero[]> {
    // return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
    if(this.useMockup) {
      return of(HEROES)
    }

    return this.http.get<SuperHero[]>(`${this.fullUrl}`);
  }

  public getSuperHero(id: number): Observable<SuperHero> {
    return of();
  }

  public createSuperHeroes(hero: SuperHero) : Observable<SuperHero[]> {
    // return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);

    return this.http.post<SuperHero[]>(`${this.fullUrl}`, hero);
  }

  public updateSuperHeroes(hero: SuperHero) : Observable<SuperHero[]> {
    // return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
    return this.http.put<SuperHero[]>(`${this.fullUrl}`, hero);
  }

  public deleteSuperHeroes(hero: SuperHero) : Observable<SuperHero[]> {
    // return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
    return this.http.delete<SuperHero[]>(`${this.fullUrl}/${hero.id}`);
  }
}
