import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components } from './components';
import { MaterialModule } from '../modules/material/material.module';
import { RoutingModule } from '../pages/routing.module';

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
    RoutingModule
  ],
  exports: components
})
export class ComponentsModule { }
