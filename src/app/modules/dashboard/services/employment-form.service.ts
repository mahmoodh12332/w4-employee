import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DateValidator} from '../../shared/validators';

@Injectable()
export class EmploymentFormService {
  public buildFormGroup(step, values) {
    const formControlForGroup = {};
    const fields = [];
    step.fields.forEach((field) => {
      const validators = [];
      if (field.required) {
        validators.push(Validators.required);
      }
      if (field.minValue) {
        validators.push(Validators.min(field.minValue));
      }
      if (field.maxValue) {
        validators.push(Validators.max(field.maxValue));
      }
      if (field.minLength) {
        validators.push(Validators.minLength(field.minLength));
      }
      if (field.maxLength) {
        validators.push(Validators.maxLength(field.maxLength));
      }
      if (field.isEmail) {
        validators.push(Validators.email);
      }
      if (field.pattern) {
        validators.push(Validators.pattern(field.pattern));
      }
      if (field.isEndDate) {
        validators.push(DateValidator.validateEndDate('startDate'));
      }
      const formControl = new FormControl({
        value: values[field.name] || '',
        disabled: field.disabled,
      }, validators);
      fields.push({
        ...field,
        formControl
      });
      formControlForGroup[field.name] = formControl;
    });
    const formGroup = new FormGroup(formControlForGroup);
    return {
      ...step,
      formGroup,
      fields,
    };
  }
}
