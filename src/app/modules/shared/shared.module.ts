import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {PanZoomComponent} from './components/pan-zoom/pan-zoom.component';
import {SharedDirectives} from './directives';
import { MaterialModules } from '../materials.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModules,
  ],
  declarations: [
    PanZoomComponent,
    ...SharedDirectives,
  ],
  exports: [
    PanZoomComponent,
  ]
})
export class SharedModule { }
