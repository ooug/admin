import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EventsRoutingModule} from './events-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {EventsService} from './events.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, EventsRoutingModule, HttpClientModule],
  providers: [EventsService],
})
export class EventsModule {}
