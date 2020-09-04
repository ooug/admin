import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventsComponent} from './events.component';
import {
  EventsListComponent,
  DialogEventRegistrations,
} from './components/events-list/events-list.component';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {AddEventComponent} from './components/add-event/add-event.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {UpdateEventComponent} from './components/update-event/update-event.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
  },
];

@NgModule({
  declarations: [
    EventsComponent,
    EventsListComponent,
    DialogEventRegistrations,
    AddEventComponent,
    UpdateEventComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
  exports: [RouterModule],
  entryComponents: [DialogEventRegistrations],
})
export class EventsRoutingModule {}
