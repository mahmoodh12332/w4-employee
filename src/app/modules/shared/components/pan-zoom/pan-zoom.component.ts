import {Component, AfterViewInit, ElementRef, ViewChild, Input, ComponentFactoryResolver, OnInit} from '@angular/core';
import panzoom from 'panzoom';
import {DocumentHostDirective} from '../../directives';

@Component({
  selector: 'app-panzoom',
  templateUrl: './pan-zoom.component.html',
})
export class PanZoomComponent implements AfterViewInit, OnInit {
  panController: any;
  @Input() componentToPan: any;
  @Input() formData: any;
  @ViewChild('scene', {static: false}) scene: ElementRef;
  @ViewChild(DocumentHostDirective, {static: true}) documentHost: DocumentHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  ngAfterViewInit(): void {
    // this.panController = panzoom(this.scene.nativeElement, {
    //   maxZoom: 1.5,
    //   minZoom: 0.1
    // });
    // this.panController.zoomTo(0, 0, 0.3);
  }

  loadComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentToPan);
    const componentRef: any = this.documentHost.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.formData = this.formData;
  }
}
