import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventsComponent} from './events.component';
import {EventsListComponent} from './components/events-list/events-list.component';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
  },
];

@NgModule({
  declarations: [EventsComponent, EventsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
