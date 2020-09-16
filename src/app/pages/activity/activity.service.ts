import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Activity, Upcoming} from './activities';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'any',
})
export class ActivityService {
  constructor(private http: HttpClient) {}

  addActivity(data: any) {
    return this.http
      .post<any>(environment.server + '/post-event-detail', data)
      .pipe(catchError(this.handleError));
  }
  deleteActivity(data: {id: any}) {
    return this.http
      .post<any>(environment.server + '/delete-event-detail', data)
      .pipe(catchError(this.handleError));
  }
  updateUpcomingWithoutImage(data: any) {
    return this.http
      .post<any>(environment.server + '/update-upcoming-without-image', data)
      .pipe(catchError(this.handleError));
  }
  updateUpcomingWithImage(data: any) {
    return this.http
      .post<any>(environment.server + '/update-upcoming-with-image', data)
      .pipe(catchError(this.handleError));
  }
  updateActivityWithoutImage(data: any) {
    return this.http
      .post<any>(
        environment.server + '/update-event-detail-without-image',
        data
      )
      .pipe(catchError(this.handleError));
  }
  updateActivityWithImage(data: any) {
    return this.http
      .post<any>(environment.server + '/update-event-detail-with-image', data)
      .pipe(catchError(this.handleError));
  }
  addUpcomingActivity(data) {
    return this.http
      .post<any>(environment.server + '/post-image-slider', data)
      .pipe(catchError(this.handleError));
  }
  getUpcomingActivity(): Observable<Upcoming[]> {
    return this.http
      .get<Upcoming[]>(environment.server + '/get-image-slider')
      .pipe(catchError(this.handleError));
  }
  deleteUpcoming(data) {
    return this.http
      .post<any>(environment.server + '/delete-upcoming-detail', data)
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
