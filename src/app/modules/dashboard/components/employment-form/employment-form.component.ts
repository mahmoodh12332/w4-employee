import {Component, OnInit} from '@angular/core';
import {EmploymentForm} from '../../../shared/data/employment-form';
import {EmploymentFormService} from '../../services';
import {CookieService} from '../../../shared/services';



@Component({
  selector: 'app-employment-form',
  templateUrl: './employment-form.component.html'
})
export class EmploymentFormComponent implements OnInit {
  stepFormGroups: Array<any> = [];
  private formData: any = {};
  constructor(private employmentFormService: EmploymentFormService, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.initStepFormGroups();
  }

  initStepFormGroups(): void {
    this.stepFormGroups = EmploymentForm.map( (step): any => this.employmentFormService.buildFormGroup(step, {
      ssn: this.cookieService.getCookie('currentSSN')
    }));
  }

  get formValue() {
    return this.formData;
  }

  set formValue(step: any) {
    this.formData[step.name] = step.formGroup.getRawValue();
    step.fields.forEach((field) => {
      if (field.type === 'group') {
        this.formData[step.name][field.name] = field.groupValues;
      }
    });
  }

  submitForm(): void {
    console.log(this.formValue);
  }

  onNextStep(step) {
    step.formGroup.markAsTouched();
    this.formValue = step;
  }
}
