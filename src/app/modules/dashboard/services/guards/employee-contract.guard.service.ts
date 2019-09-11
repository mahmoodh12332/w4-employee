import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import {CookieService} from '../../../shared/services';
import {FORM_COOKIE_NAME} from '../../../shared/data/constants';


@Injectable()
export class EmployeeContractGuardService implements CanActivate {

  constructor(
    private router: Router,
    private cookieService: CookieService,
  ) {
  }

  canActivate(): boolean | Observable<boolean> {
    if (!this.cookieService.getCookie(FORM_COOKIE_NAME)) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}
