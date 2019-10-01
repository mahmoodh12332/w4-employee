import {Component, OnInit} from '@angular/core';
import {EmploymentBaseComponent} from '../employment-base.component';
import {CookieService} from '../../../shared/services';
import {EmploymentApplicationForm} from '../../../shared/data/employment-form';
import {FORM_COOKIE_NAME} from '../../../shared/data/constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employment-application',
  templateUrl: './employment-application.component.html'
})
export class EmploymentApplicationComponent extends EmploymentBaseComponent implements OnInit {
  public steps = EmploymentApplicationForm;
  constructor(cookieService: CookieService, private router: Router) {
    super(cookieService);
  }
  ngOnInit(): void {
    super.ngOnInit();
  }
  onFormSubmit(data) {
    this.cookieService.setCookie(FORM_COOKIE_NAME, JSON.stringify(data), 1);
    this.router.navigate(['/dashboard/employment-contract']);
  }
}
