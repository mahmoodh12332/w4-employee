import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {reduce, assign, toUpper} from 'lodash';
import * as moment from 'moment';
import {
  API_ROUTES,
  CURRENT_SSN_COOKIE_NAME,
  FORM_COOKIE_NAME,
  SITE_INFO_COOKIE_NAME,
  SITE_NAMING_CONVENTION,
} from '../data/constants';
import {CookieService} from './cookie.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {EmploymentSkillsYearMap} from '../data/constants';
import {EmploymentFormForAmerigasCode} from '../data/employment-form';
import {DeviceDetectorService} from 'ngx-device-detector';

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
    private deviceInfoService: DeviceDetectorService,
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
    _ => {
      reject(_);
      this.snackBar.open(
        'Having trouble fetching skills information. please try later',
        'Ok',
        SNACK_BAR_OPTIONS
      );
    }
        );
    });
  }

  loginUser(formValue:any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post(API_ROUTES.check, formValue)
        .pipe(
          catchError(
            this.handleError.bind(this)
          )
        ).subscribe(
          (response) => {
            if (response.status === 'success') {
                  this.cookieService.setCookie(CURRENT_SSN_COOKIE_NAME, JSON.stringify(response), 1);
                  this.cookieService.setCookie(SITE_INFO_COOKIE_NAME, JSON.stringify({basicInformation: response.data}), 1);
                  resolve(response.data);
                  return;
                }else {
                  this.snackBar.open(response.errors[0].message || 'Something went wrong. Please try again', '', SNACK_BAR_OPTIONS);
                }

          },
          (err) => {

            reject(err);
          }
          );
      //   .subscribe((res: any) => {
      //   if (res.status === 'success') {
      //     this.cookieService.setCookie(CURRENT_SSN_COOKIE_NAME, res, 1);
      //     this.cookieService.setCookie(SITE_INFO_COOKIE_NAME, JSON.stringify(res.data), 1);
      //     resolve(res.data);
      //     return;
      //   }
      //   res.errors.forEach((e: any) => this.snackBar.open(e.message, 'OK', SNACK_BAR_OPTIONS));
      //   reject(res.errors);
      // }, (err) => reject(err));
    });
  }
  logoutUser() {
    this.cookieService.removeCookie(CURRENT_SSN_COOKIE_NAME);
    this.cookieService.removeCookie(FORM_COOKIE_NAME);
    this.cookieService.removeCookie(SITE_INFO_COOKIE_NAME);
    this.router.navigate(['authentication']);
  }
  newSubmitApplication(formValue: any) {
    return new Promise<void>((resolve, reject) => {
      this.http.post(API_ROUTES.newSaveApplication, formValue)
        .pipe(
          catchError(this.handleError.bind(this))
        ).subscribe(
          (response) => {
            resolve();
            if (response.status === 'success') {
              this.snackBar.open(
                'Application submitted successfully. Thank You',
                'Ok',
                SNACK_BAR_OPTIONS
              );
                  return;
                }
          },
          (err) => {
            reject(err);
            this.snackBar.open(
              'Application Not submitted Your Data. Thank You',
              'Ok',
              SNACK_BAR_OPTIONS
            );
          }
          );
    });
  }

  submitApplication(formValue: any) {
    return new Promise ((resolve, reject) => {
      const siteInfo: any = JSON.parse(this.cookieService.getCookie(SITE_INFO_COOKIE_NAME));
      const constantFormValues = {
        siteId: siteInfo.siteId,
        webCode: siteInfo.code,
        w4Version: +moment().format('YYYY'), // Year,
        w4TotalAllowances: 0,
        w4LastNameDiferr: false,
        w4AdditionalAmount: 0,
        applicationDate: (new Date()).toISOString(),
        deviceInfo: JSON.stringify({
          ...this.deviceInfoService.getDeviceInfo(),
          isMobile: this.deviceInfoService.isMobile(),
          isDesktop: this.deviceInfoService.isDesktop(),
          isTablet: this.deviceInfoService.isTablet(),
        }),
        ...ApplicationBodyConstants
      };
      const formBody: any = reduce(formValue, (c, v) => {
        assign(c, v);
        return c;
      }, {});
      assign(formBody, constantFormValues);
      delete formBody.formSubmit;
      formBody.w4_Exempt = formBody.w4_Exempt === 'EXEMPT';
      formBody.skills = this.skillsData ? this.mapSkills(formBody.skills) : [];
      formBody.workHistories = (formBody.workHistories || []).map((h) => ({
        employmentHistoryId: 0,
        ...ApplicationBodyConstants,
        ...h
      }));
      this.http.post(API_ROUTES.saveApplication, formBody)
        .subscribe(
        (response) => {
          resolve(response);
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
        skillId: this.skillsData.find(sk => sk.description === s.level).skillId,
        years: EmploymentSkillsYearMap[s.years].id,
        ...ApplicationBodyConstants
      };
    });
  }

  get siteCode() {
    try {
      const siteInfo = JSON.parse(this.cookieService.getCookie(SITE_INFO_COOKIE_NAME));
      return toUpper(siteInfo.code);
    } catch (e) {
      return '';
    }
  }

  get siteNamingConvention() {
    return JSON.parse(JSON.stringify(SITE_NAMING_CONVENTION[this.siteCode] || SITE_NAMING_CONVENTION.default));
  }
}
