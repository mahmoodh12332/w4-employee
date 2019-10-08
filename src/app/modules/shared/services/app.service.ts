import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {reduce, assign} from 'lodash';
import * as moment from 'moment';
import {
  API_ROUTES,
  DATE_FORMAT,
  CURRENT_SSN_COOKIE_NAME,
  FORM_COOKIE_NAME,
  SITE_INFO_COOKIE_NAME,
} from '../data/constants';
import {CookieService} from './cookie.service';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AppService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private snackBar: MatSnackBar
  ) {
  }

  loginUser({socialNumber, accessCode}): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.get(`${API_ROUTES.getAccessCode}/${accessCode}`).subscribe((res: any) => {
        if (res.status === 'success') {
          this.cookieService.setCookie(CURRENT_SSN_COOKIE_NAME, socialNumber, 1);
          this.cookieService.setCookie(SITE_INFO_COOKIE_NAME, JSON.stringify(res.data), 1);
          resolve(res.data);
          return;
        }
        res.errors.forEach((e: any) => {
          this.snackBar.open(e.message, 'OK', {
            verticalPosition: 'top',
            horizontalPosition: 'right',
            duration: 2000,
          });
        });
        reject(res.errors);
      });
    });
  }

  logoutUser() {
    this.cookieService.removeCookie(CURRENT_SSN_COOKIE_NAME);
    this.cookieService.removeCookie(FORM_COOKIE_NAME);
    this.cookieService.removeCookie(SITE_INFO_COOKIE_NAME);
  }

  submitApplication(formValue: any) {
    return new Promise ((resolve, reject) => {
      const siteInfo: any = JSON.parse(this.cookieService.getCookie(SITE_INFO_COOKIE_NAME));
      const constantFormValues = {
        employeeId: 0,
        masterId: 0,
        siteId: siteInfo.siteId,
        webCode: siteInfo.code,
        applicationDate: moment(),
      };
      const formBody = reduce(formValue, (c, v) => {
        assign(c, v);
        return c;
      }, {});
      assign(formBody, constantFormValues);
      setTimeout(() => {
        resolve();
      }, 2000);
      // this.http.post(API_ROUTES.saveApplication, formBody)
      //   .subscribe(
      //   (response) => {
      //     console.log(response);
      //   },
      //   (err) => {
      //     console.log(err);
      //   }
      //   );
    });
  }
}
