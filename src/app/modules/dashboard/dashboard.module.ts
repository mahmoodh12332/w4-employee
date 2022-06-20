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
import {EmploymentW4FormComponent} from './components/employment-w4-form/employment-w4-form.component';
import {SkillsComponent} from './components/skills/skills-component';
import {DashboardServices} from './services';
import {MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material';
import {DocumentComponents} from './components/documents';
import {EmploymentConfirmationComponent} from './components/employment-confirmation/employment-confirmation.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    DashboardComponent,
    EmploymentFormComponent,
    EmploymentFormFieldComponent,
    EmploymentModalComponent,
    EmploymentContractComponent,
    EmploymentApplicationComponent,
    EmploymentConfirmationComponent,
    EmploymentW4FormComponent,
    SkillsComponent,
    ...DocumentComponents,
  ],
  imports: [
    MaterialModules,
    SharedModule,
    DashboardRouting,
    MatProgressSpinnerModule
  ],
  exports: [
    EmploymentFormComponent,
    EmploymentFormFieldComponent,
    EmploymentModalComponent,
    EmploymentContractComponent,
    EmploymentApplicationComponent,
    EmploymentConfirmationComponent,
    EmploymentW4FormComponent,
    SkillsComponent,
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
    SkillsComponent,
    ...DocumentComponents,
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
