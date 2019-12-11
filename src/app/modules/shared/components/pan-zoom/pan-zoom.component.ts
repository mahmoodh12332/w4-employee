import {Component, AfterViewInit, ElementRef, ViewChild, Input, ComponentFactoryResolver, OnInit} from '@angular/core';
import panzoom from 'panzoom';
import {DocumentHostDirective} from '../../directives';
import {AppService} from '../../services';

@Component({
  selector: 'app-panzoom',
  templateUrl: './pan-zoom.component.html',
})
export class PanZoomComponent implements AfterViewInit, OnInit {
  panController: any;
  @Input() componentToPan: any;
  @Input() field: any;
  @Input() formData: any;
  @ViewChild('scene', {static: false}) scene: ElementRef;
  @ViewChild(DocumentHostDirective, {static: true}) documentHost: DocumentHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appService: AppService) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  ngAfterViewInit(): void {
    if (this.field.isPanEnabled) {
      this.panController = panzoom(this.scene.nativeElement, {
        maxZoom: 1.5,
        minZoom: 0.1
      });
      let scaleMultiplier = 0.35;
      let clientX = 300;
      if (window.innerWidth <= 425) {
        scaleMultiplier = 0.45;
        clientX = 20;
      }
      this.panController.zoomTo(clientX, 0, scaleMultiplier);
    }
  }

  loadComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentToPan);
    const componentRef: any = this.documentHost.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.formData = this.formData;
    componentRef.instance.siteNamingConvention = this.appService.siteNamingConvention;
  }
}
