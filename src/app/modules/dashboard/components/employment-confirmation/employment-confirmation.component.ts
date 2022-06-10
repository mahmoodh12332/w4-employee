import {Component, OnInit, ViewChild} from '@angular/core';
import {EmploymentBaseComponent} from '../employment-base.component';
import {AppService, CookieService} from '../../../shared/services';
import {EmploymentConfirmationForm} from '../../../shared/data/employment-form';
import {FORM_COOKIE_NAME} from '../../../shared/data/constants';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employment-confirmation',
  templateUrl: './employment-confirmation.component.html'
})
export class EmploymentConfirmationComponent extends EmploymentBaseComponent implements OnInit {
  public steps = EmploymentConfirmationForm;
  @ViewChild('DialogOverviewExampleDialog', {static: true}) public DialogOverviewExampleDialog;

  formData: string;
  isSubmitting: boolean;
  submitdata: any;
  objectApi: any;
  constructor(cookieService: CookieService, private router: Router,
    private appService: AppService,
    ) {
    super(cookieService);
  }
  ngOnInit(): void {
    super.ngOnInit();
    this.formData = this.cookieService.getCookie(FORM_COOKIE_NAME);
    console.log(this.formData)
  }
  flat(res, key, val, pre = '') {
    // const prefix = [pre, key].filter(v => v).join();
    const prefix = [ key].filter(v => v).join();
    return typeof val === 'object'
      ? Object.keys(val).reduce((prev, curr) => this.flat(prev, curr, val[curr], prefix), res)
      : Object.assign(res, { [prefix]: val});
  }
  flatObject(input) {
    return Object.keys(input).reduce((prev, curr) => this.flat(prev, curr, input[curr]), {});
  }

  onFormSubmit(data) {
    if (data && data.fieldToVerify) {
      delete data.fieldToVerify.undefined;
    }
    this.objectApi = this.flatObject(JSON.parse(this.formData))
    console.log( this.objectApi )
    // this.cookieService.setCookie(FORM_COOKIE_NAME, JSON.stringify(data), 1);
    this.isSubmitting = true;
    this.appService.newSubmitApplication(this.objectApi).then((res) => {
      console.log(res)
      this.isSubmitting = false;
      // this.openDialog()
    });
  }

}
