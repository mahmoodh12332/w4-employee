import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-signature-pad',
  template: '<signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>'
})

export class SignaturePadComponent implements AfterViewInit {

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
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
}
