import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
  ];

  loadNewCourses() {
    this.courses = [
      { id: 1, name: 'course1new'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'},
      { id: 4, name: 'course4'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
