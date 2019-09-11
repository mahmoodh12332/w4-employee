import {Component, OnInit} from '@angular/core';
import {EmploymentBaseComponent} from '../employment-base.component';
import {CookieService} from '../../../shared/services';
import {EmploymentContractForm} from '../../../shared/data/employment-form';

@Component({
  selector: 'app-employment-contract',
  templateUrl: './employment-contract.component.html'
})
export class EmploymentContractComponent extends EmploymentBaseComponent implements OnInit {
  public readonly steps = EmploymentContractForm;
  constructor(cookieService: CookieService) {
    super(cookieService);
  }
  ngOnInit(): void {
    super.ngOnInit();
    console.log('this is Contract');
  }
  onFormSubmit(data) {
    console.log(data);
    this.cookieService.getCookie('');
  }
}
