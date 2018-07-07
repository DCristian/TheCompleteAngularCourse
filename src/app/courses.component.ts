import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <input type="text" [(ngModel)]="title"/>
    <br/>
    {{ title | titlePipe }}
  `
})
export class CoursesComponent {
    title: string;
}
