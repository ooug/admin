import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'any',
})
export class NewsletterService {
  constructor(private http: HttpClient) {}

  public getNewsLetterSubscription() {
    return new Promise((resolve, reject) => {
      this.http
        .get(environment.server + '/app/get-newsletter-subscriptions')
        .subscribe((data: any) => {
          if (data.status) {
            resolve(data.data);
          } else {
            reject(data);
          }
        });
    });
  }

  public sendNewsletter(
    htmlData: string,
    subjectData: string,
    attachmentData: any = null
  ) {
    return new Promise((resolve, reject) => {
      this.http
        .post(environment.server + '/app/send-newsletter', {
          html: htmlData,
          subject: subjectData,
          file: attachmentData,
        })
        .subscribe((data: any) => {
          if (data.status) {
            resolve(data.data);
          } else {
            reject(data);
          }
        });
    });
  }
}
