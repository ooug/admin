import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddEventComponent} from './components/add-event/add-event.component';

@Component({
  selector: 'ooug-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public addNewEvent() {
    this.dialog.open(AddEventComponent, {disableClose: true});
  }
}
