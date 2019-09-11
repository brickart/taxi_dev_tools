import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';
import { SettingsRoutingModule } from './settings-router.module';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [ SettingsPageComponent ],
  imports: [
    CommonModule,
    ComponentsModule,
    SettingsRoutingModule
  ]
})
export class SettingsPageModule { }
