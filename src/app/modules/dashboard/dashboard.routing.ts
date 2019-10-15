import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../shared/services';
import {EmployeeContractGuardService} from './services';
import {DashboardComponent} from './dashboard.component';
import {EmploymentApplicationComponent} from './components/employment-application/employment-application.component';
import {EmploymentContractComponent} from './components/employment-contract/employment-contract.component';
import {EmploymentConfirmationComponent} from './components/employment-confirmation/employment-confirmation.component';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'employment-application',
        pathMatch: 'full'
      },
      {
        path: 'employment-application',
        component: EmploymentApplicationComponent
      },
      {
        path: 'employment-contract',
        canActivate: [EmployeeContractGuardService],
        component: EmploymentContractComponent
      },
      {
        path: 'employment-confirmation',
        canActivate: [EmployeeContractGuardService],
        component: EmploymentConfirmationComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouting { }
