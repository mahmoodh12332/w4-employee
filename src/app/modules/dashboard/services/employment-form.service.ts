import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DateValidator} from '../../shared/validators';
import {reduce, map} from 'lodash';
import * as moment from 'moment';

class MyCustomFormControl extends FormControl {
  private readonly fieldType: string;
  constructor(type: string, ...args) {
    super(...args);
    this.fieldType = type;
  }

  $getValue() {
    if (this.value && (this.value instanceof Date || this.fieldType === 'date')) {
      return moment(this.value.toISOString()).format('YYYY-MM-DD');
    }
    return this.value;
  }
}
class MyCustomFormGroup extends FormGroup {
  constructor(a, b?, c?) {
    super(a, b, c);
  }
  getRawValue(): any {
    return this.$getValues();
  }

  $getValues() {
    return reduce(this.controls, (acc: any, c: MyCustomFormControl, key: string) => {
      acc[key] = c.$getValue();
      return acc;
    }, {});
  }

  /**
   * Loop and touch all it has
   *
   * @param {FormGroup} formGroup
   * @param func << function name: [markAsTouched, markAsUntouched, markAsDirty, markAsPristine, markAsPending
   * @param opts
   *
   */

}

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
      let currentValue: any = '';
      if (field.type === 'date' && values[field.name]) {
        currentValue = new Date(values[field.name]);
      } else if (field.type === 'group' && values[field.name]) {
        field.groupValues = values[field.name];
      } else if (values[field.name]) {
        currentValue = values[field.name];
      }
      const formControl = new MyCustomFormControl(field.type, {
        value: currentValue,
        disabled: field.disabled,
      }, validators);
      fields.push({
        ...field,
        formControl
      });
      formControlForGroup[field.name] = formControl;
    });
    const formGroup = new MyCustomFormGroup(formControlForGroup);
    return {
      ...step,
      formGroup,
      fields,
    };
  }
}
