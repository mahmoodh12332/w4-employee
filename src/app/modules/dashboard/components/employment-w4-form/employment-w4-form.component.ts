import {Component, OnInit, ViewChild} from '@angular/core';
import {EmploymentBaseComponent} from '../employment-base.component';
import {CookieService} from '../../../shared/services';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {upperCase} from 'lodash';
import {FORM_COOKIE_NAME} from '../../../shared/data/constants';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-employment-w4-form-component',
  templateUrl: './employment-w4-form.component.html'
})
export class EmploymentW4FormComponent extends EmploymentBaseComponent implements OnInit {
  public w4FormGroup: FormGroup;
  @ViewChild('w4Page2Modal', {static: true}) public w4Page2Modal;
  @ViewChild('w4Page3Modal', {static: true}) public w4Page3Modal;
  constructor(cookieService: CookieService,
              private formBuilder: FormBuilder,
              private router: Router,
              public dialog: MatDialog,
  ) {
    super(cookieService);
  }
  ngOnInit(): void {
    super.ngOnInit();
    this.buildFormGroup();
  }
  private buildFormGroup() {
    console.log(this.formValues);
    const {
      w4Children,
      w4Dependents,
      w4OtherIncome,
      w4Deductions,
      w4ExtraWithHolding,
      w4TwoJobs,
      w4MaritalStatus,
      w4_Exempt,
    } = (this.formValues.w4Information || {
      w4Children: 0,
      w4Dependents: 0,
      w4OtherIncome: 0,
      w4Deductions: 0,
      w4ExtraWithHolding: 0,
      w4TwoJobs: false,
      w4MaritalStatus: null,
      w4_Exempt: ''
    });
    this.w4FormGroup = this.formBuilder.group({
      w4Children: [w4Children || 0],
      w4Dependents: [
        w4Dependents || 0,
        [
          Validators.min(0),
          Validators.max(10)
        ]
      ],
      w4OtherIncome: [w4OtherIncome || 0],
      w4Deductions: [w4Deductions || 0],
      w4ExtraWithHolding: [w4ExtraWithHolding || 0],
      w4TwoJobs: [w4TwoJobs || false],
      w4MaritalStatus: [w4MaritalStatus, Validators.required],
      w4_Exempt: [w4_Exempt === 'EXEMPT' ? w4_Exempt : ''],
    });
  }
  private writeValues() {
    const values = this.w4FormGroup.getRawValue();
    values['w4_Exempt'] = upperCase(values['w4_Exempt']);
    const newFormValues = Object.assign({}, this.formValues, {
      w4Information: values,
    });
    this.cookieService.setCookie(FORM_COOKIE_NAME, JSON.stringify(newFormValues));
  }
  public onStepperSelectionChange(data) {
    this.w4FormGroup.markAsTouched();
  }
  public skipToConfirmation() {
    this.w4FormGroup.reset({
      w4Children: 0,
      w4Dependents: 0,
      w4OtherIncome: 0,
      w4Deductions: 0,
      w4ExtraWithHolding: 0,
      w4TwoJobs: false,
      w4_Exempt: '',
      w4MaritalStatus: this.w4FormGroup.get('w4MaritalStatus').value,
    });
    this.writeValues();
    this.router.navigate(['/dashboard/employment-confirmation']);
  }
  public validateIfItsExemptOrNot() {
    if (
      this.w4FormGroup.controls['w4_Exempt'].value !== '' &&
      upperCase(this.w4FormGroup.controls['w4_Exempt'].value) !== 'EXEMPT'
    ) {
      this.w4FormGroup.controls['w4_Exempt'].setErrors({
        invalidValue: true,
      });
    }
  }
  public continueToConfirmation() {
    this.writeValues();
    this.router.navigate(['/dashboard/employment-confirmation']);
  }

  public openPage(page) {
    this.dialog.open(page);
  }
}
