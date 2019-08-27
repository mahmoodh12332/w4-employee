import { NgModule } from '@angular/core';

import { AuthenticationRouting } from './authentication.routing';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './components/login/login.component';
import {MaterialModules} from '../materials.module';



@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent
  ],
  imports: [
    MaterialModules,
    AuthenticationRouting,
  ],
  exports: [LoginComponent],
  providers: [],
  bootstrap: [AuthenticationComponent]
})
export class AuthenticationModule { }
