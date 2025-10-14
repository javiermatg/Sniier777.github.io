import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Acerca } from './acerca/acerca';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'acerca', component: Acerca },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' } // redirige rutas no existentes
];

