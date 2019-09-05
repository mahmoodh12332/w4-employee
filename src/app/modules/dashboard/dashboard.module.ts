import { NgModule } from '@angular/core';


import {MaterialModules} from '../materials.module';
import {DashboardRouting} from './dashboard.routing';
import {SharedModule} from '../shared/shared.module';
import {DashboardComponent} from './dashboard.component';
import {EmploymentFormComponent} from './components/employment-form/employment-form.component';
import {EmploymentFormFieldComponent} from './components/employment-form-field/employment-form-field.component';
import {EmploymentModalComponent} from './components/employment-modal/employment-modal.component';
import {SignInFormComponent} from './components/documents/sign-in/sign-in-form.component';
import {DrugAndAlcoholPolicyComponent} from './components/documents/drug-and-alchol-policy/drug-and-alcohol-policy.component';
import {CellularPhonePolicyComponent} from './components/documents/cellular-phone/cellular-phone-policy.component';
import {FcrAuthPolicyComponent} from './components/documents/fcr-auth/fcr-auth-policy.component';
import {DashboardServices} from './services';
import {MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material';

@NgModule({
  declarations: [
    DashboardComponent,
    EmploymentFormComponent,
    EmploymentFormFieldComponent,
    EmploymentModalComponent,
    SignInFormComponent,
    DrugAndAlcoholPolicyComponent,
    CellularPhonePolicyComponent,
    FcrAuthPolicyComponent
  ],
  imports: [
    MaterialModules,
    SharedModule,
    DashboardRouting,
  ],
  exports: [
    EmploymentFormComponent,
    EmploymentFormFieldComponent,
    EmploymentModalComponent,
    SignInFormComponent,
    DrugAndAlcoholPolicyComponent,
    CellularPhonePolicyComponent,
    FcrAuthPolicyComponent
  ],
  providers: [
    DashboardServices,
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    }
  ],
  entryComponents: [EmploymentModalComponent],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
