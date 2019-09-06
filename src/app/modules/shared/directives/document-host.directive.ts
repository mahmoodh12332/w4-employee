import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDocumentHost]',
})
export class DocumentHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
