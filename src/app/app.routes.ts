import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page/contact-page.component';
import { EventPageComponent } from './pages/event-page/event-page/event-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page/registration-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },

  {
    path: 'Inscripción ',
    component: RegistrationPageComponent,
  },

  {
    path: 'Eventos ',
    component: EventPageComponent,
  },

  {
    path: 'Artabrian Nights ',
    redirectTo: 'https://artabriannights.github.io/',
  },

  {
    path: 'Contacto',
    component: ContactPageComponent,
  },

  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
