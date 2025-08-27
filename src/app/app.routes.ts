import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full',
  },
  {
    path: 'bienvenida',
    loadComponent: () =>
      import('./bienvenida/bienvenida').then(m => m.Bienvenida),
  },
  {
    path: 'auth',
    loadComponent: () =>import('./pages/auth/auth').then(m => m.Auth),
    loadChildren: () =>import('./pages/auth/auth.routes').then(r => r.authRoutes),
  },
  {
    path: 'sobre-mi',//es el AGREGADO
    loadComponent: () =>
      import('./sobre-mi/sobre-mi').then(m => m.SobreMi),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./error/error').then(m => m.Error),
  },
];
