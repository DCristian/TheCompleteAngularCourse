import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { BadInputError } from '../common/bad-input-error';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

export class DataService {
  static handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }

    if (error.status === 400) {
      return throwError(new BadInputError(error));
    }

    return throwError(new AppError(error));
  }
}
