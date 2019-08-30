import { NgModule } from '@angular/core';


import {MaterialModules} from '../materials.module';
import {DashboardRouting} from './dashboard.routing';
import {DashboardComponent} from './dashboard.component';
import {EmploymentFormComponent} from './components/employment-form/employment-form.component';
import {MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material';

@NgModule({
  declarations: [
    DashboardComponent,
    EmploymentFormComponent
  ],
  imports: [
    MaterialModules,
    DashboardRouting,
  ],
  exports: [
    EmploymentFormComponent,
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  }],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
