import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DomainsComponent } from './components/domains/domains.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'domains',
    loadComponent: () =>
      import('./components/domains/domains.component').then(
        (m) => m.DomainsComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'table',
    loadComponent: () =>
      import('./components/table/table.component').then(
        (m) => m.TableComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'tree',
    loadComponent: () =>
      import('./components/tree/tree.component').then(
        (m) => m.TreeComponent
      ),
  },
  {
    path: 'drag-drop',
    loadComponent: () =>
      import('./components/drag-drop/drag-drop.component').then(
        (m) => m.DragDropComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
