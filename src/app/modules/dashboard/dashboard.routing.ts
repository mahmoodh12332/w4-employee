import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../shared/services';
import {DashboardComponent} from './dashboard.component';
import {EmploymentFormComponent} from './components/employment-form/employment-form.component';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'employment-form',
        pathMatch: 'full'
      },
      {
        path: 'employment-form',
        component: EmploymentFormComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouting { }
