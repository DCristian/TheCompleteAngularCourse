import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http
      .get(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  create(data: any) {
    return this.http
      .post(this.url, JSON.stringify(data))
      .pipe(
        catchError(this.handleError)
      );
  }

  update(id: number, data: any) {
    return this.http
      .patch(this.url + '/' + id, JSON.stringify(data))
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id: number) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }

    if (error.status === 400) {
      return throwError(new BadInputError(error));
    }

    return throwError(new AppError(error));
  }
}
