import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideNavComponent } from './left-side-nav/left-side-nav.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';

@NgModule({
    imports: [
        CommonModule
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
