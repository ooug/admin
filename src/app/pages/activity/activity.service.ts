import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Activity} from './activities';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'any',
})
export class ActivityService {
  constructor(private http: HttpClient) {}

  addActivity(data: any) {
    console.log('success!!');
    return this.http
      .post<any>(environment.server + '/post-event-detail', data)
      .pipe(catchError(this.handleError));
  }
  deleteActivity(data: {id: any}) {
    console.log(data);
    return this.http
      .post<any>(environment.server + '/delete-event-detail', data)
      .pipe(catchError(this.handleError));
  }
  updateActivityWithoutImage(data: any) {
    console.log(data);
    return this.http
      .post<any>(
        environment.server + '/update-event-detail-without-image',
        data
      )
      .pipe(catchError(this.handleError));
  }
  updateActivityWithImage(data: any) {
    console.log(data);
    return this.http
      .post<any>(environment.server + '/update-event-detail-with-image', data)
      .pipe(catchError(this.handleError));
  }

  getRecentActivity(): Observable<Activity[]> {
    return this.http
      .get<Activity[]>(environment.server + '/get-recent-event-detail')
      .pipe(catchError(this.handleError));
  }

  getActivity(): Observable<Activity[]> {
    return this.http
      .get<Activity[]>(environment.server + '/get-event-detail')
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }
}
