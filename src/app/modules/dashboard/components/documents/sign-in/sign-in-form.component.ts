import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
})
export class SignInFormComponent {
  @Input() formData: any;
}
