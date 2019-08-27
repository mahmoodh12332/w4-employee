import { NgModule } from '@angular/core';


import {MaterialModules} from '../materials.module';
import {DashboardRouting} from './dashboard.routing';
import {DashboardComponent} from './dashboard.component';
import {EmploymentFormComponent} from './components/employment-form/employment-form.component';

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
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
