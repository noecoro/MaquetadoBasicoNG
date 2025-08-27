import { Routes } from "@angular/router";

export const authRoutes: Routes=[
  {
    path: 'login',
    loadComponent:()=> import('./login/login').then((archivo)=>archivo.Login),

    },
  {
 path: 'registro',
    loadComponent:()=> import('./registro/registro').then((archivo)=>archivo.Registro),
  },

]

