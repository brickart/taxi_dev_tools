import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmulatorPageComponent } from './emulator-page/emulator-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

const routes: Routes = [
    { path: 'emulator', component: EmulatorPageComponent },
    { path: 'settings', component: SettingsPageComponent },
    { path: '', redirectTo: '/emulator', pathMatch: 'full'},
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [EmulatorPageComponent, SettingsPageComponent]
})
export class RoutingModule { }
