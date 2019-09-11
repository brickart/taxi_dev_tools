import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmulatorPageComponent } from './emulator-page.component';

const emulatorRoutes: Routes = [
    { path: '', component: EmulatorPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(emulatorRoutes)],
    exports: [RouterModule]
})
export class EmulatorRoutingModule { }
