import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {EmploymentFormService} from '../../services';
import {CookieService} from '../../../shared/services';
import {CURRENT_SSN_COOKIE_NAME} from '../../../shared/data/constants';
import {every} from 'lodash';

@Component({
  selector: 'app-employment-form',
  templateUrl: './employment-form.component.html'
})
export class EmploymentFormComponent implements OnInit {
  @Input() public showNextButton: boolean;
  @Input() public showBackButton: boolean;
  @Input() public isSubmitting: boolean;
  @Input() public steps: any;
  @Input() public dataValues: any = {};
  @Output() public formSubmit: EventEmitter<any> = new EventEmitter();
  stepFormGroups: Array<any> = [];
  private formData: any = {};
  constructor(
    private employmentFormService: EmploymentFormService,
    private cookieService: CookieService) {}

  ngOnInit(): void {
    this.initStepFormGroups();
    this.formData = this.dataValues;
  }

  initStepFormGroups(): void {
    this.stepFormGroups = this.steps
      .map( (step): any => this.employmentFormService.buildFormGroup(step, this.dataValues[step.name] || {
        socialSecurityNo: this.cookieService.getCookie(CURRENT_SSN_COOKIE_NAME)
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
    this.steps.forEach((step, i) => {
      this.formValue = this.stepFormGroups[i];
    });
    this.formSubmit.emit(this.formValue);
  }

  onStepperSelectionChange(event) {
    const step = this.stepFormGroups[event.previouslySelectedIndex];
    if (!step) {
      return;
    }
    step.formGroup.markAsTouched();
    this.formValue = step;
  }

  isStepperLinear() {
    return !every(this.stepFormGroups, s => s.formGroup.valid);
  }
}
