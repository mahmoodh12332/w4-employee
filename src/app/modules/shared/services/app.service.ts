import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
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
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {EmploymentSkillsYearMap} from '../data/constants';

const SNACK_BAR_OPTIONS: any = {
  verticalPosition: 'top',
  horizontalPosition: 'right',
  duration: 2000,
};
const ApplicationBodyConstants = {
  employeeId: 0,
  masterId: 0,
}
@Injectable()
export class AppService {
  private $skillsData: any = null;
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
    private snackBar: MatSnackBar
  ) {
  }


  private handleError(e: HttpErrorResponse) {
    this.snackBar.open(e.message || 'Something went wrong. Please try again later', '', SNACK_BAR_OPTIONS);
    return throwError(e);
  }
  get skillsData() {
    return this.$skillsData;
  }
  set skillsData(val) {
    this.$skillsData = Object.freeze(val);
  }
  getSkillsData() {
    return new Promise((resolve, reject) => {
      if (this.skillsData) {
        resolve(this.skillsData);
        return;
      }
      this.http.get(API_ROUTES.skills)
        .pipe(
          catchError(this.handleError.bind(this))
        )
        .subscribe(
        (res: any) => {
          if (res.status === 'success') {
            this.skillsData = res.data;
          }
          resolve(this.skillsData);
        },
    _ => reject(_)
        );
    });
  }
  loginUser({socialNumber, accessCode}): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.get(`${API_ROUTES.getAccessCode}/${accessCode}`)
        .pipe(
          catchError(this.handleError.bind(this))
        )
        .subscribe((res: any) => {
        if (res.status === 'success') {
          this.cookieService.setCookie(CURRENT_SSN_COOKIE_NAME, socialNumber, 1);
          this.cookieService.setCookie(SITE_INFO_COOKIE_NAME, JSON.stringify(res.data), 1);
          resolve(res.data);
          this.getSkillsData();
          return;
        }
        res.errors.forEach((e: any) => this.snackBar.open(e.message, 'OK', SNACK_BAR_OPTIONS));
        reject(res.errors);
      }, (err) => reject(err));
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
        siteId: siteInfo.siteId,
        webCode: siteInfo.code,
        applicationDate: (new Date()).toISOString(),
        ...ApplicationBodyConstants
      };
      const formBody: any = reduce(formValue, (c, v) => {
        assign(c, v);
        return c;
      }, {});
      assign(formBody, constantFormValues);
      formBody.skills = this.skillsData ? this.mapSkills(formBody.skills) : [];
      formBody.workHistories = (formBody.workHistories || []).map((h) => ({
        employmentHistoryId: 0,
        ...ApplicationBodyConstants,
        ...h
      }));
      this.http.post(API_ROUTES.saveApplication, formBody)
        .subscribe(
        (response) => {
          console.log({response});
          resolve();
          this.snackBar.open(
            'Application submitted successfully. Thank You',
            'Ok',
            SNACK_BAR_OPTIONS
          );
        },
        (err) => {
          reject(err);
        }
        );
    });
  }
  private mapSkills(skills) {
    return skills.map(s => {
      return {
        experienceId: 0,
        skillId: this.skillsData.find(sk => sk.description === s.level),
        years: EmploymentSkillsYearMap[s.years].id,
        ...ApplicationBodyConstants
      };
    });
  }
}
