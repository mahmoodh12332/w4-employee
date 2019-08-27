import {Component, HostListener} from '@angular/core';
import {CookieService} from '../shared/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  constructor(private cookieService: CookieService) {}

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event) {
    this.cookieService.removeCookie();
    event.returnValue = false;
  }
}
