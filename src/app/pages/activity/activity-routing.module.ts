import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ActivityComponent} from './activity.component';

import {CommonModule} from '@angular/common';
import {from} from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatMenuModule} from '@angular/material/menu';

const routes: Routes = [
  {
    path: '',
    component: ActivityComponent,
  },
];

@NgModule({
  declarations: [ActivityComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollingModule,
    MatMenuModule,
  ],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
