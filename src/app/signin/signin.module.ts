import { NgModule } from '@angular/core';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
    declarations: [
        SigninFormComponent,
        LoginFormComponent
    ],
    exports: [
        SigninFormComponent,
        LoginFormComponent
    ]
})
export class SigninModule { }
