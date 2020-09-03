import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

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
    url: new FormControl(''),
    enableRegistration: new FormControl(true),
  });

  constructor() {}

  ngOnInit(): void {}

  public addEvent() {
    console.log(this.addNewEventForm.value);
  }
}
