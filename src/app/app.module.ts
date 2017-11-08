import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { SigninModule } from './signin';
import { NavigationModule } from './navigation';

@NgModule({
    imports: [
        BrowserModule,
        NavigationModule,
        SigninModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
