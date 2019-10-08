import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {reduce, assign} from 'lodash';
import {
  API_ROUTES,
  CURRENT_SSN_COOKIE_NAME,
  FORM_COOKIE_NAME,
  SITE_INFO_COOKIE_NAME,
} from '../data/constants';
import {CookieService} from './cookie.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

const SNACK_BAR_OPTIONS: any = {
  verticalPosition: 'top',
  horizontalPosition: 'right',
  duration: 2000,
};

@Injectable()
export class AppService {
  private skillsData: any = null;
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
    private snackBar: MatSnackBar
  ) {
  }


  getSkillsData() {
    return new Promise((resolve, reject) => {
      if (this.skillsData) {
        resolve(this.skillsData);
        return;
      }
      this.http.get(API_ROUTES.skills).subscribe(
        (res: any) => {
          if (res.status === 'success') {
            this.skillsData = res.data;
          }
          resolve(this.skillsData);
        },
        (err) => {
          console.log('Error Fetching Skills data: ', {err});
          reject(null);
        }
        );
    });
  }
  loginUser({socialNumber, accessCode}): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.get(`${API_ROUTES.getAccessCode}/${accessCode}`).subscribe((res: any) => {
        if (res.status === 'success') {
          this.cookieService.setCookie(CURRENT_SSN_COOKIE_NAME, socialNumber, 1);
          this.cookieService.setCookie(SITE_INFO_COOKIE_NAME, JSON.stringify(res.data), 1);
          resolve(res.data);
          this.getSkillsData();
          return;
        }
        res.errors.forEach((e: any) => this.snackBar.open(e.message, 'OK', SNACK_BAR_OPTIONS));
        reject(res.errors);
      });
    });
  }

  logoutUser() {
    this.cookieService.removeCookie(CURRENT_SSN_COOKIE_NAME);
    this.cookieService.removeCookie(FORM_COOKIE_NAME);
    this.cookieService.removeCookie(SITE_INFO_COOKIE_NAME);
    this.router.navigate(['authentication']);
  }

  submitApplication(formValue: any) {
    return new Promise ((resolve, reject) => {
      const siteInfo: any = JSON.parse(this.cookieService.getCookie(SITE_INFO_COOKIE_NAME));
      const constantFormValues = {
        employeeId: 0,
        masterId: 0,
        siteId: siteInfo.siteId,
        webCode: siteInfo.code,
        applicationDate: (new Date()).toISOString(),
      };
      const formBody = reduce(formValue, (c, v) => {
        assign(c, v);
        return c;
      }, {});
      assign(formBody, constantFormValues);
      setTimeout(() => {
        resolve();
        this.snackBar.open(
          'Application submitted successfully. Thank You',
          'Ok',
          SNACK_BAR_OPTIONS
        );
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
