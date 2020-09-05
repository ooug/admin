import {Component, OnInit, Inject} from '@angular/core';
import {EventsService} from '../../events.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UpdateEventComponent} from '../update-event/update-event.component';
import {jsPDF} from 'jspdf';
import exportFromJSON from 'export-from-json';

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

  public updateEvent(id: string) {
    this.dialog.open(UpdateEventComponent, {
      data: {eventId: id},
      disableClose: true,
    });
  }

  public deleteEvent(eventId: string) {
    if (confirm('Are you sure?')) {
      this.eventsService
        .deleteOneEvent(eventId)
        .then(data => {
          alert('Event Deleted!');
        })
        .catch(err => {
          console.log(err);
        });
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

  public event: any;

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

  public exportToPDF() {
    const doc = new jsPDF();
    let y = 20;

    doc
      .setFontSize(30)
      .text('ODISHA ORACLE USERS GROUP', 105, y, {align: 'center'});
    y += 12;
    doc
      .setFontSize(22)
      .text(this.event.title + ' Registrations', 105, y, {align: 'center'});
    y += 7;
    doc
      .setFontSize(12)
      .setTextColor('gray')
      .text(
        'On ' +
          this.event.Date.day +
          '-' +
          this.event.Date.month +
          '-' +
          this.event.Date.year +
          ' ' +
          this.event.time +
          '   Venue: ' +
          this.event.venue,
        105,
        y,
        {align: 'center'}
      );

    y += 7;

    doc.setTextColor('black').cell(10, y, 15, 8, 'Sl', 0, 'center');
    doc.setTextColor('black').cell(25, y, 50, 8, 'Name', 0, 'center');
    doc.setTextColor('black').cell(75, y, 25, 8, 'Roll No', 0, 'center');
    doc.setTextColor('black').cell(100, y, 60, 8, 'Email', 0, 'center');
    doc.setTextColor('black').cell(160, y, 40, 8, 'Mobile', 0, 'center');

    this.event.registration.forEach((e: any, i: number) => {
      y += 7;
      doc.setFontSize(9);
      doc
        .setTextColor('black')
        .cell(10, y, 15, 10, (i + 1).toString(), i + 1, 'center');
      doc.setTextColor('black').cell(25, y, 50, 10, e.name, i + 1, 'center');
      doc.setTextColor('black').cell(75, y, 25, 10, e.roll, i + 1, 'center');
      doc.setTextColor('black').cell(100, y, 60, 10, e.email, i + 1, 'center');
      doc.setTextColor('black').cell(160, y, 40, 10, e.mobile, i + 1, 'center');
    });

    window.open(String(doc.output('bloburl')));
  }

  public exportToExcel() {
    const dataExport = this.event.registration.map(e => {
      return {
        name: e.name,
        roll: e.roll,
        email: e.email,
        mobile: e.mobile,
      };
    });
    exportFromJSON({
      data: dataExport,
      fileName: this.event.title + '_Registrations',
      exportType: 'xls',
    });
  }

  public exportToCSV() {
    const dataExport = this.event.registration.map(e => {
      return {
        name: e.name,
        roll: e.roll,
        email: e.email,
        mobile: e.mobile,
      };
    });
    exportFromJSON({
      data: dataExport,
      fileName: this.event.title + '_Registrations',
      exportType: 'csv',
    });
  }
}
