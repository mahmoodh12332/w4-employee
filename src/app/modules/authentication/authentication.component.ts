import {Component, OnInit} from '@angular/core';
import {CookieService} from '../shared/services';
import {Router} from '@angular/router';
import {CURRENT_SSN_COOKIE_NAME} from '../shared/data/constants';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html'
})
export class AuthenticationComponent implements OnInit {
  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {
    if (this.cookieService.getCookie(CURRENT_SSN_COOKIE_NAME)) {
      this.router.navigate(['/dashboard']);
    }
  }
}
