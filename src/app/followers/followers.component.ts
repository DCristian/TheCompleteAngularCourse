import { Component, OnInit } from '@angular/core';

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
    private followersService: FollowersService
  ) { }

  ngOnInit() {
    this.getFollowers();
  }

  getFollowers(): void {
    this.followersService
      .getAll()
      .subscribe(response => {
        this.followers = response;
      });
  }
}
