import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Follower } from '../common/interfaces/follower';
import { FollowersService } from '../services/followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: Follower[];

  constructor(
    private followersService: FollowersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.route.queryParamMap.subscribe(params => {});,

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .pipe(
        switchMap(combined => {
          let id = combined[0].get('id');
          let page = combined[1].get('page');

          return this.followersService.getAll();
        })
      )
      .subscribe(response => {
        this.followers = response;
      });

    // this.getFollowers();
  }

  getFollowers(): void {
    this.followersService
      .getAll()
      .subscribe(response => {
        this.followers = response;
      });
  }
}
