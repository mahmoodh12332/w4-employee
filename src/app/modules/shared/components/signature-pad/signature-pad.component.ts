import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-signature-pad',
  template: `
    <div class="w-100 mt-2 mb-2 text-right">
      <button mat-raised-button (click)="clearValue()">Clear</button>
    </div>
    <div class="w-100" style="border: 1px dotted black">
      <signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>
    </div>
  `
})

export class SignaturePadComponent implements AfterViewInit {

  @Input() fc: FormControl;
  @ViewChild(SignaturePad, {static: false}) signaturePad: SignaturePad;

  private signaturePadOptions: object = { // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 500,
    canvasHeight: 300
  };

  constructor() {
    // no-op
  }

  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 1);
    this.signaturePad.clear();
  }

  drawComplete() {
    this.fc.setValue(this.signaturePad.toDataURL());
  }

  clearValue() {
    this.fc.reset();
    this.signaturePad.clear();
  }
  drawStart() {}
}
