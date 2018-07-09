import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html'
})
export class NewCourseFormComponent {
  form = new FormGroup({
    'name': new FormControl('', Validators.required),
    'contact': new FormGroup({
      'email': new FormControl(),
      'phone': new FormControl()
    }),
    'topics': new FormArray([])
  });

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'name': [
        '',
        Validators.required
      ],
      'contact': fb.group({
        'email': [],
        'phone': []
      }),
      'topics': fb.array([])
    });
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(): FormArray {
    return this.form.get('topics') as FormArray;
  }
}
