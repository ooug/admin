import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {FullLayoutComponent} from './layouts/full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: '',
    component: ContentLayoutComponent,
    data: {title: 'content layout'},
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./pages/auth/auth.module').then(m => m.AuthModule),
      },
    ],
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {title: 'content layout'},
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            m => m.DashboardModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./pages/blog/blog.module').then(m => m.BlogModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
