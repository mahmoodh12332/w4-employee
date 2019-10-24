import {Component, OnInit} from '@angular/core';
import {EmploymentBaseComponent} from '../employment-base.component';
import {AppService, CookieService} from '../../../shared/services';
import {EmploymentContractForm, EmploymentFormForAmerigasCode} from '../../../shared/data/employment-form';
import {SITE_INFO_COOKIE_NAME, AMERIGAS_WEB_CODE} from '../../../shared/data/constants';

@Component({
  selector: 'app-employment-contract',
  templateUrl: './employment-contract.component.html'
})
export class EmploymentContractComponent extends EmploymentBaseComponent implements OnInit {
  public steps = EmploymentContractForm;
  public isSubmitting = false;
  constructor(
    cookieService: CookieService,
    private appService: AppService,
  ) {
    super(cookieService);
  }
  ngOnInit(): void {
    super.ngOnInit();
    this.handleAMG40CodeCase();
  }

  private handleAMG40CodeCase() {
    try {
      const siteInfo = JSON.parse(this.cookieService.getCookie(SITE_INFO_COOKIE_NAME));
      console.log({siteInfo});
      if (siteInfo.code === AMERIGAS_WEB_CODE) {
        this.steps.splice(this.steps.length - 1, 0, ...EmploymentFormForAmerigasCode);
      }
    } catch (e) {
      console.log(e);
    }

  }

  onFormSubmit() {
    this.isSubmitting = true;
    this.appService.submitApplication(this.formValues).then((res) => {
      this.isSubmitting = false;
      this.appService.logoutUser();
    });
  }
}
