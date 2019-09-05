import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {PanZoomComponent} from './components/pan-zoom/pan-zoom.component';

import { MaterialModules } from '../materials.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModules
  ],
  declarations: [
    PanZoomComponent,
  ],
  exports: [
    PanZoomComponent,
  ]
})
export class SharedModule { }
