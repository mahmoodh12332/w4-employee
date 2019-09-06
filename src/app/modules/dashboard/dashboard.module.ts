import { NgModule } from '@angular/core';


import {MaterialModules} from '../materials.module';
import {DashboardRouting} from './dashboard.routing';
import {SharedModule} from '../shared/shared.module';
import {DashboardComponent} from './dashboard.component';
import {EmploymentFormComponent} from './components/employment-form/employment-form.component';
import {EmploymentFormFieldComponent} from './components/employment-form-field/employment-form-field.component';
import {EmploymentModalComponent} from './components/employment-modal/employment-modal.component';
import {DashboardServices} from './services';
import {MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material';
import {DocumentComponents} from './components/documents';

@NgModule({
  declarations: [
    DashboardComponent,
    EmploymentFormComponent,
    EmploymentFormFieldComponent,
    EmploymentModalComponent,
    ...DocumentComponents,
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
