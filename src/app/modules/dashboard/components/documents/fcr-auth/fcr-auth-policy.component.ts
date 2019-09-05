import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fcr-auth-policy',
  templateUrl: './fcr-auth-policy.component.html',
})
export class FcrAuthPolicyComponent {
  @Input() formData: any;
}
