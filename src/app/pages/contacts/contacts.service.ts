import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'any',
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  public getContactUsRequests() {
    return new Promise((resolve, reject) => {
      this.http
        .get(environment.server + '/app/get-contact-us-requests')
        .subscribe((data: any) => {
          if (data.status) {
            resolve(data.data);
          } else {
            resolve(data.data);
          }
        });
    });
  }
}
