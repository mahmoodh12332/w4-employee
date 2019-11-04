import {Component, OnInit} from '@angular/core';
import {EmploymentBaseComponent} from '../employment-base.component';
import {AppService, CookieService} from '../../../shared/services';
import {
  EmploymentContractForm,
  EmploymentFormForWorkWell,
  EmploymentFormForAmerigasCode,
} from '../../../shared/data/employment-form';
import {
  AMERIGAS_WEB_CODE,
  WORKWELL_WEB_CODE
} from '../../../shared/data/constants';

@Component({
  selector: 'app-employment-contract',
  templateUrl: './employment-contract.component.html'
})
export class EmploymentContractComponent extends EmploymentBaseComponent implements OnInit {
  public steps = [...EmploymentContractForm];
  public isSubmitting = false;
  constructor(
    cookieService: CookieService,
    private appService: AppService,
  ) {
    super(cookieService);
  }
  ngOnInit(): void {
    super.ngOnInit();
    this.handleWorkWellCodeCase();
    this.handleAMG01CodeCase();
    this.setLastFormButtonLabel();
  }

  private handleAMG01CodeCase() {
    if (this.appService.siteCode === AMERIGAS_WEB_CODE) {
      this.steps.splice(this.steps.length - 1, 0, ...EmploymentFormForAmerigasCode);
    }
  }

  private handleWorkWellCodeCase() {
    if (this.appService.siteCode === WORKWELL_WEB_CODE) {
      this.steps.splice(this.steps.length - 1, 0, ...EmploymentFormForWorkWell);
    }
  }

  private setLastFormButtonLabel() {
    const lastStep = this.steps[this.steps.length - 2];
    lastStep.fields[lastStep.fields.length - 1].controlLabels = {
      buttons: {
        agree: 'Let\'s Sign Contract',
          disagree: 'I disagree',
      }
    };
  }

  onFormSubmit() {
    this.isSubmitting = true;
    this.appService.submitApplication(this.formValues).then((res) => {
      this.isSubmitting = false;
      this.appService.logoutUser();
    });
  }
}
