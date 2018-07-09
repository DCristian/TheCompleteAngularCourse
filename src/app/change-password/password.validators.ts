import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class PasswordValidators {
  static shouldMatchTheOldPassword(control: AbstractControl): Promise<ValidationErrors|null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        let oldPassword = '1234';

        if (control.value !== oldPassword) {
          resolve({ shouldMatchTheOldPassword: true });
          return;
        }

        resolve(null);
      }, 1000);
    });
  }

  static shouldMatch(expected: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors|null => {
      if (control.value !== expected.value) {
        return { shouldMatch: true };
      }

      return null;
    };
  }
}
