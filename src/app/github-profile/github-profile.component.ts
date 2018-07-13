import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id1 = this.route.snapshot.paramMap.get('id');

    this.route.paramMap
      .subscribe(params => {
        let id2 = +params.get('id');
      });
  }

  async submit() {
    await this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }
}
