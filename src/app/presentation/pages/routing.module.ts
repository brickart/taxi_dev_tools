import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmulatorPageComponent } from './emulator-page/emulator-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

const routes: Routes = [
    { path: 'emulators', loadChildren: './emulator/emulator.module#EmulatorModule' },
    { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
    { path: '', redirectTo: '/emulators', pathMatch: 'full'},
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [EmulatorPageComponent, SettingsPageComponent]
})
export class RoutingModule { }
