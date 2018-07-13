import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Follower } from '../common/interfaces/follower';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {
  url = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Follower[]> {
    return this.http
      .get<Follower[]>(this.url)
      .pipe(
        catchError(DataService.handleError)
      );
  }
}
