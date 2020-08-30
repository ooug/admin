import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {UserComponent} from './components/user/user.component';

const routes: Routes = [
  {
    path: ':userId/change-password',
    component: ChangePasswordComponent,
  },
  {
    path: ':userId/user',
    component: UserComponent,
  },
  {
    path: ':userId',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent, UserComponent, ChangePasswordComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
