import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmulatorPageComponent } from './emulator-page/emulator-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

const routes: Routes = [
    { path: 'emulator', loadChildren: () => import('./emulator-page/emulator-page.module').then(mod => mod.EmulatorPageModule) },
    { path: 'settings', loadChildren: () => import('./settings-page/settings-page.module').then(mod => mod.SettingsPageModule) },
    { path: '', redirectTo: 'emulator', pathMatch: 'full'},
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
