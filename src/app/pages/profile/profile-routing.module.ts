import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';

const routes: Routes = [
  {
    path: ':userId/change-password',
    component: ChangePasswordComponent,
  },
  {
    path: ':userId',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent, ChangePasswordComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
