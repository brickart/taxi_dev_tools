import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../modules/material/material.module';
import { components } from './components';

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: components
})
export class ComponentsModule { }
