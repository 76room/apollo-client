import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SigninModule } from './signin';
import { NavigationModule } from './navigation';
import { appRoutes } from './app.routes';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SigninModule,
                NavigationModule,
                RouterModule.forRoot(appRoutes)
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
