import {Component, OnInit} from '@angular/core';
import {ContactsService} from './contacts.service';

@Component({
  selector: 'ooug-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor(private contactService: ContactsService) {}

  public requests: any[];

  ngOnInit(): void {
    this.contactService
      .getContactUsRequests()
      .then((contactUsRequests: any) => {
        this.requests = contactUsRequests;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  public getDate(timeStamp: number) {
    return new Date(timeStamp * 1000).toString();
  }
}
