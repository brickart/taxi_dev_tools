import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { RoutingModule } from './pages/routing.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    PresentationComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ComponentsModule
  ],
  exports: [ PresentationComponent ]
})
export class PresentationModule { }
