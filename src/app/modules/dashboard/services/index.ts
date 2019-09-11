import {EmploymentFormService} from './employment-form.service';
import {EmployeeContractGuardService} from './guards/employee-contract.guard.service';

export const DashboardServices = [
  EmploymentFormService,
  EmployeeContractGuardService
];

export * from './employment-form.service';
export * from './guards/employee-contract.guard.service';
