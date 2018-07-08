import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [
    {
      id: 1,
      name: 'Name'
    },
    {
      id: 2,
      name: 'Email'
    }
  ];

  submit(f) {
    console.log(f);
  }
}
