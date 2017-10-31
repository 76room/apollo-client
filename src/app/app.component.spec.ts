import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { LeftSideNavComponent } from './left-side-nav/left-side-nav.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                LeftSideNavComponent,
                FooterNavComponent
            ],
        }).compileComponents();
    }));

    // it('should create the app', async(() => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app).toBeTruthy();
    // }));
});
