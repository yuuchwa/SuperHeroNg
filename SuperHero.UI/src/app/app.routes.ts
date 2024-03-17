import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details/:id', component: EditHeroComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];
