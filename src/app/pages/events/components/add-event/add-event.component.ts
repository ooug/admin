import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {EventsService} from '../../events.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'ooug-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  public addNewEventForm = new FormGroup({
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
    public dialogRef: MatDialogRef<AddEventComponent>
  ) {}

  ngOnInit(): void {}

  public addEvent() {
    const dt = new Date(this.addNewEventForm.value.dateTime);
    const newEvent: any = {
      title: this.addNewEventForm.value.title,
      Image: {
        host: this.addNewEventForm.value.imageHost,
        path: this.addNewEventForm.value.imagePath,
      },
      shortDescription: this.addNewEventForm.value.shortDescription,
      longDescription: this.addNewEventForm.value.longDescription,
      venue: this.addNewEventForm.value.venue,
      enableRegistration: this.addNewEventForm.value.enableRegistration,
      Date: {
        day: dt.getDate(),
        month: dt.toLocaleString('default', {month: 'long'}),
        year: dt.getFullYear(),
      },
      time: this.formatAMPM(dt),
    };
    this.eventService
      .addEvent(newEvent)
      .then(data => {
        alert('Event successfully created!');
        this.dialogRef.close();
      })
      .catch(err => {
        console.log(err);
      });
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
}
