import { Routes } from '@angular/router';
import { LoginFormComponent, SigninFormComponent } from './signin';
import { WelcomeComponent } from './welcome.component';
import { HomeComponent } from './home.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'signin', component: SigninFormComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', redirectTo: '/welcome'}
];
