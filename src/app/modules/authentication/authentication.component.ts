import {Component, OnInit} from '@angular/core';
import {CookieService} from '../shared/services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html'
})
export class AuthenticationComponent implements OnInit {
  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {
    if (this.cookieService.getCookie('currentSSN')) {
      this.router.navigate(['/dashboard']);
    }
  }
}
