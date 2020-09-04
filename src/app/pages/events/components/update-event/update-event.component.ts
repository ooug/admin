import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {EventsService} from '../../events.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'ooug-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss'],
})
export class UpdateEventComponent implements OnInit {
  public updateEventForm = new FormGroup({
    title: new FormControl(''),
    shortDescription: new FormControl(''),
    longDescription: new FormControl(''),
    dateTime: new FormControl(''),
    venue: new FormControl(''),
    imageHost: new FormControl(''),
    imagePath: new FormControl(''),
    enableRegistration: new FormControl(false),
  });

  constructor(
    private eventService: EventsService,
    public dialogRef: MatDialogRef<UpdateEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public event: any = null;

  ngOnInit(): void {
    this.fetchEventData();
  }

  private fetchEventData() {
    this.eventService
      .getOneUpcomingEvent(this.data.eventId)
      .then(event => {
        this.event = event;
        this.setFormValues();
      })
      .catch(err => {
        console.log(err);
      });
  }

  private setFormValues() {
    this.updateEventForm.controls.title.setValue(this.event.title);
    this.updateEventForm.controls.shortDescription.setValue(
      this.event.shortDescription
    );
    this.updateEventForm.controls.longDescription.setValue(
      this.event.longDescription
    );
    this.updateEventForm.controls.venue.setValue(this.event.venue);
    this.updateEventForm.controls.enableRegistration.setValue(
      this.event.enableRegistration
    );
    this.updateEventForm.controls.imageHost.setValue(this.event.Image.host);
    this.updateEventForm.controls.imagePath.setValue(this.event.Image.path);
    const dt = new Date(
      this.event.Date.day +
        '/' +
        this.event.Date.month +
        '/' +
        this.event.Date.year
    );
    this.updateEventForm.controls.dateTime.setValue(
      this.event.Date.year +
        '-' +
        (String(dt.getMonth() + 1).length === 1
          ? '0' + String(dt.getMonth() + 1)
          : String(dt.getMonth() + 1)) +
        '-' +
        this.event.Date.day +
        'T' +
        this.convertTime12to24(this.event.time)
    );
  }

  public updateEvent() {
    const dt = new Date(this.updateEventForm.value.dateTime);
    const newEvent: any = {
      title: this.updateEventForm.value.title,
      Image: {
        host: this.updateEventForm.value.imageHost,
        path: this.updateEventForm.value.imagePath,
      },
      shortDescription: this.updateEventForm.value.shortDescription,
      longDescription: this.updateEventForm.value.longDescription,
      venue: this.updateEventForm.value.venue,
      enableRegistration: this.updateEventForm.value.enableRegistration,
      Date: {
        day: dt.getDate(),
        month: dt.toLocaleString('default', {month: 'long'}),
        year: dt.getFullYear(),
      },
      time: this.formatAMPM(dt),
    };
    console.log(newEvent);
  }

  private formatAMPM(date: any) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  private convertTime12to24(time12h) {
    const [time, modifier] = time12h.split(' ');

    // tslint:disable-next-line: prefer-const
    let [hours, minutes] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  }
}
