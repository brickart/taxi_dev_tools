import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { RoutingModule } from './routing.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [PresentationComponent, HeaderComponent],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [ PresentationComponent ]
})
export class PresentationModule { }
