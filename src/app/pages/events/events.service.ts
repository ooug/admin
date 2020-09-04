import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'any',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  public getAllUpcomingEvents() {
    return new Promise((resolve, reject) => {
      this.http
        .get(environment.server + '/upcoming-event/get-all')
        .subscribe((data: any) => {
          if (data.status) {
            resolve(data);
          } else {
            reject(data);
          }
        });
    });
  }

  public getRegistration(eventId: string) {
    return new Promise((resolve, reject) => {
      this.http
        .get(environment.server + '/upcoming-event/registrations/' + eventId)
        .subscribe((data: any) => {
          if (data.status) {
            resolve(data.data);
          } else {
            reject(data);
          }
        });
    });
  }

  public getOneUpcomingEvent(eventId: string) {
    return new Promise((resolve, reject) => {
      this.http
        .get(environment.server + '/upcoming-event/get-one/' + eventId)
        .subscribe((data: any) => {
          if (data.status) {
            resolve(data.data);
          } else {
            reject(data);
          }
        });
    });
  }

  public deleteOneEvent(eventId: string) {
    return new Promise((resolve, reject) => {
      this.http
        .post(environment.server + '/upcoming-event/delete-one', {id: eventId})
        .subscribe((data: any) => {
          if (data.status) {
            resolve(data);
          } else {
            reject(data);
          }
        });
    });
  }

  public addEvent(event: any) {
    return new Promise((resolve, reject) => {
      this.http
        .post(environment.server + '/upcoming-event/create', event)
        .subscribe((data: any) => {
          if (data.status) {
            resolve(data);
          } else {
            reject(data);
          }
        });
    });
  }
}
