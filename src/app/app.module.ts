import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftSideNavComponent } from './left-side-nav/left-side-nav.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { SigninModule } from './signin';

@NgModule({
    imports: [
        BrowserModule,
        SigninModule
    ],
    declarations: [
        AppComponent,
        LeftSideNavComponent,
        FooterNavComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
