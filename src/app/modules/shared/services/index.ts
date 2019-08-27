import { CookieService } from './cookie.service';

// GUARDS
import { AuthGuardService } from './guards/auth.guard.service';
import {AppService} from './app.service';

export const Services = [
  CookieService,
  AuthGuardService,
  AppService,
];

export * from './cookie.service';
export * from './guards/auth.guard.service';
export * from './app.service';
