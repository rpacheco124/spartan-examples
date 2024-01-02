import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'mail', loadComponent: () => import('./pages/mail/mail.component').then(mod => mod.MailComponent)}
];
