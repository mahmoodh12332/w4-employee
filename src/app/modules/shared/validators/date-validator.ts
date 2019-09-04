import { FormControl } from '@angular/forms';

export class DateValidator {

  static validateEndDate(startDateControlName) {
    return (fc: FormControl) => {
      if (fc && fc.value && fc.parent && !fc.parent.controls[startDateControlName].value) {
        return {
          invalidEndDate: 'Can not set End Date without Start Date',
        };
      }
      if (fc && fc.value && fc.parent && fc.value <= fc.parent.controls[startDateControlName].value) {
        return {
          invalidEndDate: 'End Date must be greater than Start Date'
        };
      }
      return null;
    };
  }
}
