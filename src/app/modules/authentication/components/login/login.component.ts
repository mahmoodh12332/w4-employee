import {Component, OnInit} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { DatePipe } from '@angular/common';

import {AppService} from '../../../shared/services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public submitting = false;

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.createForm();

  }

  createForm(): void {
    this.loginForm = new FormGroup({

      ssn: new FormControl('', [
        Validators.required,
        Validators.minLength(9)
      ]),
      dob: new FormControl('', [
        Validators.required,
        Validators.minLength(10)

        // Validators.pattern("MM/DD/yyyy"),


      ])

    });
  }

  onSubmit() {

    if (!this.loginForm.valid) {
      this.loginForm.markAsDirty();
      return;
    }
    this.submitting = true;
    const text = this.loginForm.value.ssn;
    const text1 = this.loginForm.value.ssn;
    const text2 = this.loginForm.value.ssn;
    const result = text.slice(0, 3);
    const result1 = text.slice(3, 5);
    const result2 = text.slice(5, 9);
    this.loginForm.value.ssn = result+"-"+result1+"-"+result2
    const dateSendingToServer = new DatePipe('en-US').transform(this.loginForm.value.dob, 'MM/d/yyyy')
    this.loginForm.value.dob = dateSendingToServer
    this.appService.loginUser(this.loginForm.value)
      .then(() => {
        this.router.navigate(['dashboard']);
      }).finally(() => {
        this.submitting = false;

      });
  }
}
