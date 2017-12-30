import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { SigninModule } from './signin';
import { NavigationModule } from './navigation';
import { WelcomeComponent } from './welcome.component';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        BrowserModule,
        NavigationModule,
        SigninModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
