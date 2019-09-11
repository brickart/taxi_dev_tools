import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmulatorRoutingModule } from './emulator-router.module';
import { EmulatorPageComponent } from './emulator-page.component';
import { ComponentsModule } from '../../components/components.module';
import { MaterialModule } from '../../modules/material/material.module';

@NgModule({
  declarations: [EmulatorPageComponent],
  imports: [
    CommonModule,
    EmulatorRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class EmulatorPageModule { }
