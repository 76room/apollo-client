import { NgModule } from '@angular/core';
import { SigninModalComponent } from './signin-modal/signin-modal.component';
import { LoginModalComponent } from './login-modal/login-modal.component';

@NgModule({
    declarations: [
        SigninModalComponent,
        LoginModalComponent
    ],
    exports: [
        SigninModalComponent,
        LoginModalComponent
    ]
})
export class SigninModule {

}
