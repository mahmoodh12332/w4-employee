import {Component, OnInit} from '@angular/core';
import {CookieService} from '../../shared/services';
import {FORM_COOKIE_NAME} from '../../shared/data/constants';

@Component({
  selector: 'app-employment-base',
  template: ''
})
export class EmploymentBaseComponent implements OnInit {
  public formValues: any = {};
  constructor(public cookieService: CookieService) {

  }
  ngOnInit(): void {
    console.log('=========This is Base');
    try {
      this.formValues = JSON.parse(this.cookieService.getCookie(FORM_COOKIE_NAME));
    } catch (e) {
      this.formValues = {};
    }
  }
}
