import {Component, OnInit, Inject} from '@angular/core';
import {EventsService} from '../../events.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'ooug-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  constructor(
    private eventsService: EventsService,
    private dialog: MatDialog
  ) {}
  public upcomingEvents: [] = [];

  public showRegistrations(id: string) {
    this.dialog.open(DialogEventRegistrations, {data: {eventId: id}});
  }

  public deleteEvent(eventId: string) {
    if (confirm('Are you sure?')) {
      console.log('deleted');
    }
  }

  ngOnInit(): void {
    this.eventsService
      .getAllUpcomingEvents()
      .then((data: any) => {
        this.upcomingEvents = data.data;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}

@Component({
  selector: 'ooug-event-registration',
  templateUrl: 'event-registration.html',
})
// tslint:disable-next-line: component-class-suffix
export class DialogEventRegistrations implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private eventsService: EventsService
  ) {}

  public event;

  ngOnInit() {
    this.eventsService
      .getOneUpcomingEvent(this.data.eventId)
      .then(event => {
        this.event = event;
        this.eventsService
          .getRegistration(this.data.eventId)
          .then((reg: any[]) => {
            this.event.registration = reg;
            // console.log(this.event);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
}
