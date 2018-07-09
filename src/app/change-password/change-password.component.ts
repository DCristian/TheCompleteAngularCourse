import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent {
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      'oldPassword': ['', Validators.required, PasswordValidators.shouldMatchTheOldPassword],
      'newPassword': ['', Validators.required],
      'confirmPassword': ['', []]
    });

    this.confirmPassword.setValidators([Validators.required, PasswordValidators.shouldMatch(this.newPassword)]);
  }

  get oldPassword(): AbstractControl {
    return this.form.get('oldPassword');
  }

  get newPassword(): AbstractControl {
    return this.form.get('newPassword');
  }

  get confirmPassword(): AbstractControl {
    return this.form.get('confirmPassword');
  }
}
