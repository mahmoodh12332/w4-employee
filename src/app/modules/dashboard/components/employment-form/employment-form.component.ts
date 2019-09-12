import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {EmploymentFormService} from '../../services';
import {CookieService} from '../../../shared/services';


@Component({
  selector: 'app-employment-form',
  templateUrl: './employment-form.component.html'
})
export class EmploymentFormComponent implements OnInit {
  @Input() public steps: any;
  @Input() public dataValues: any = {};
  @Output() public formSubmit: EventEmitter<any> = new EventEmitter();
  stepFormGroups: Array<any> = [];
  private formData: any = {};
  constructor(private employmentFormService: EmploymentFormService, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.initStepFormGroups();
    this.formData = this.dataValues;
  }

  initStepFormGroups(): void {
    this.stepFormGroups = this.steps
      .map( (step): any => this.employmentFormService.buildFormGroup(step, this.dataValues[step.name] || {
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
}
