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
}
