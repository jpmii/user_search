import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'user/:username',
        loadComponent: () => import('./components/user-detail/user-detail').then(m => m.UserDetail)
    },
    {
        path: '',
        loadComponent: () => import('./components/home/home').then(m => m.HomeComponent)
    }
];
