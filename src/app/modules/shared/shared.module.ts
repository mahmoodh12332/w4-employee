import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { MaterialModules } from '../materials.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModules
  ],
  declarations: [],
  exports: []
})
export class SharedModule { }
