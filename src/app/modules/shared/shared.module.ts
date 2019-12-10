import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {PanZoomComponent} from './components/pan-zoom/pan-zoom.component';
import {SignaturePadComponent} from './components/signature-pad/signature-pad.component';
import {ExitApplicationModalComponent} from './components/exit-application-modal/exit-application-modal.component';
import {DocumentHostDirective, SharedDirectives} from './directives';
import { MaterialModules } from '../materials.module';
import {SignaturePadModule} from 'angular2-signaturepad';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModules,
    SignaturePadModule,
  ],
  declarations: [
    PanZoomComponent,
    SignaturePadComponent,
    ExitApplicationModalComponent,
    ...SharedDirectives,
  ],
  exports: [
    PanZoomComponent,
    SignaturePadComponent,
    ExitApplicationModalComponent,
    DocumentHostDirective
  ]
})
export class SharedModule { }
