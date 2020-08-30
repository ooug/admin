import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './components/login/login.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {OtpComponent} from './components/otp/otp.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  {
    path: 'otp',
    component: OtpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: AuthComponent,
  },
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    OtpComponent,
    ResetPasswordComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
