import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ActivityComponent} from './activity.component';

import {CommonModule} from '@angular/common';
import {from} from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: ActivityComponent,
  },
];

@NgModule({
  declarations: [ActivityComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
