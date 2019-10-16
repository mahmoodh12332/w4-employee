import {Component, OnInit} from '@angular/core';
import {EmploymentBaseComponent} from '../employment-base.component';
import {AppService, CookieService} from '../../../shared/services';
import {EmploymentContractForm} from '../../../shared/data/employment-form';

@Component({
  selector: 'app-employment-contract',
  templateUrl: './employment-contract.component.html'
})
export class EmploymentContractComponent extends EmploymentBaseComponent implements OnInit {
  public readonly steps = EmploymentContractForm;
  public isSubmitting = false;
  constructor(
    cookieService: CookieService,
    private appService: AppService,
  ) {
    super(cookieService);
  }
  ngOnInit(): void {
    super.ngOnInit();
  }
  onFormSubmit() {
    this.isSubmitting = true;
    this.appService.submitApplication(this.formValues).then((res) => {
      this.isSubmitting = false;
      this.appService.logoutUser();
    });
  }
}
