import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cellular-phone-policy',
  templateUrl: './cellular-phone-policy.component.html',
})
export class CellularPhonePolicyComponent {
  @Input() formData: any;
}
