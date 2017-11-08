import { Routes } from '@angular/router';
import { LoginFormComponent, SigninFormComponent } from './signin';

export const appRoutes: Routes = [
    { path: 'login', component: LoginFormComponent },
    { path: 'signin', component: SigninFormComponent },
    { path: '**', redirectTo: ''}
];
