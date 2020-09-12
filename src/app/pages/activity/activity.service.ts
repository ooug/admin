import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class ActivityService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/post-event-detail';
  addActivity(data) {
    return this.http
      .post<any>(this.url, data)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }
}
