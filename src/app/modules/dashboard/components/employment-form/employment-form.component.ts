import {Component, OnInit} from '@angular/core';
import {EmploymentForm} from '../../../shared/data/employment-form';
import {EmploymentFormService} from '../../services';



@Component({
  selector: 'app-employment-form',
  templateUrl: './employment-form.component.html'
})
export class EmploymentFormComponent implements OnInit {
  stepFormGroups: Array<any> = [];
  constructor(private employmentFormService: EmploymentFormService) {}

  ngOnInit(): void {
    this.initStepFormGroups();
  }

  initStepFormGroups(): void {
    this.stepFormGroups = EmploymentForm.map( (step): any => this.employmentFormService.buildFormGroup(step, {}));
  }

  get formValue() {
    const data = {};
    this.stepFormGroups.forEach((step) => data[step.name] = step.formGroup.value);
    return data;
  }

  submitForm(): void {
    console.log(this.formValue);
  }
}
