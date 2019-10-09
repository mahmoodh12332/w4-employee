import { NgModule } from '@angular/core';


import {MaterialModules} from '../materials.module';
import {DashboardRouting} from './dashboard.routing';
import {SharedModule} from '../shared/shared.module';
import {DashboardComponent} from './dashboard.component';
import {EmploymentFormComponent} from './components/employment-form/employment-form.component';
import {EmploymentFormFieldComponent} from './components/employment-form-field/employment-form-field.component';
import {EmploymentModalComponent} from './components/employment-modal/employment-modal.component';
import {EmploymentContractComponent} from './components/employment-contract/employment-contract.component';
import {EmploymentApplicationComponent} from './components/employment-application/employment-application.component';
import {DashboardServices} from './services';
import {MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material';
import {DocumentComponents} from './components/documents';
import { TransportationAgreementComponent } from './components/documents/transportation-agreement/transportation-agreement.component';
import { WelcomeToPPSCompanyPoliciesAndProceduresComponent } from './components/documents/welcome-to-pps-company-policies-and-procedures/welcome-to-pps-company-policies-and-procedures.component';
import { ProhibitedWorkPolicyComponent } from './components/documents/prohibited-work-policy/prohibited-work-policy.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EmploymentFormComponent,
    EmploymentFormFieldComponent,
    EmploymentModalComponent,
    EmploymentContractComponent,
    EmploymentApplicationComponent,
    ...DocumentComponents,
    TransportationAgreementComponent,
    WelcomeToPPSCompanyPoliciesAndProceduresComponent,
    ProhibitedWorkPolicyComponent,
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
    EmploymentContractComponent,
    EmploymentApplicationComponent,
    ...DocumentComponents,
  ],
  providers: [
    DashboardServices,
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    }
  ],
  entryComponents: [
    EmploymentModalComponent,
    ...DocumentComponents,
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
