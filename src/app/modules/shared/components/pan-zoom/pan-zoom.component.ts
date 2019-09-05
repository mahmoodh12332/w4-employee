import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import panzoom from 'panzoom';

@Component({
  selector: 'app-panzoom',
  templateUrl: './pan-zoom.component.html',
})
export class PanZoomComponent implements AfterViewInit {
  panController: any;
  @ViewChild('scene', { static: false }) scene: ElementRef;
  ngAfterViewInit(): void {
    this.panController = panzoom(this.scene.nativeElement, {
      maxZoom: 1.5,
      minZoom: 0.1
    });
    this.panController.zoomTo(100, 100, 0.3);
  }

}
