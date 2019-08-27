import {Component, OnInit} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {AppService} from '../../../shared/services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = new FormGroup({
      accessCode: new FormControl('', [
        Validators.required,
      ]),
      socialNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(9)
      ])
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.loginForm.markAsDirty();
      return;
    }
    this.appService.loginUser(this.loginForm.value).then(() => {
      console.log('========>>>>.');
      this.router.navigate(['dashboard']);
    });
  }
}
