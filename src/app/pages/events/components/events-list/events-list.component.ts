import {Component, OnInit} from '@angular/core';
import {EventsService} from '../../events.service';

@Component({
  selector: 'ooug-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  constructor(private eventsService: EventsService) {}
  public upcomingEvents: [] = [];

  ngOnInit(): void {
    this.eventsService
      .getAllUpcomingEvents()
      .then((data: any) => {
        this.upcomingEvents = data.data;
        console.log(this.upcomingEvents);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
