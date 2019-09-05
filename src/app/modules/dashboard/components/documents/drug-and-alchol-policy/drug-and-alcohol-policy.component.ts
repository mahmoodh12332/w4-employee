import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drug-and-alcohol-policy',
  templateUrl: './drug-and-alcohol-policy.component.html',
})
export class DrugAndAlcoholPolicyComponent {
  @Input() formData: any;
}
