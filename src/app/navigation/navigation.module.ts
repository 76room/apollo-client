import { NgModule } from '@angular/core';
import { LeftSideNavComponent } from './left-side-nav/left-side-nav.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule,
        SharedModule
    ],
    declarations: [
        LeftSideNavComponent,
        FooterNavComponent
    ],
    exports: [
        LeftSideNavComponent,
        FooterNavComponent
    ]
})
export class NavigationModule { }
