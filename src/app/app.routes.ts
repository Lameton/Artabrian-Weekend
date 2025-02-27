import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Inicio',
    component: HomePageComponent,
  },
  {
    path: 'magic',
    title: 'Magic The Gathering',
    loadComponent: () => import('./pages/magic-page/magic-page.component'),
  },
  {
    path: 'starwars',
    title: 'Star Wars Unlimited',
    loadComponent: () =>
      import('./pages/starwars-pages/star-wars-page.component'),
  },
  {
    path: 'onepiece',
    title: 'One Piece',
    loadComponent: () =>
      import('./pages/one-piece-pages/one-piece-pages.component'),
  },
  {
    path: 'artabrian-nights',
    title: 'Artabrian Nights',
    redirectTo: 'https://artabriannights.github.io/',
  },
  {
    path: 'contacto',
    title: 'Contacto',
    loadComponent: () => import('./pages/contact-page/contact-page.component'),
  },
  {
    path: '**',
    title: '404',
    loadComponent: () =>
      import('./pages/not-found-page/not-found-page.component'),
  },
];
