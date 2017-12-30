import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';

@NgModule({
    imports: [
        RouterModule,
        SharedModule
    ],
    declarations: [
        NavbarTopComponent,
        FooterNavComponent
    ],
    exports: [
        NavbarTopComponent,
        FooterNavComponent
    ]
})
export class NavigationModule { }
