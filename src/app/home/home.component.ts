import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  archives = [
    {
      year: 2018,
      month: 1,
    },
    {
      year: 2018,
      month: 2,
    },
    {
      year: 2018,
      month: 3,
    }
  ];
}
