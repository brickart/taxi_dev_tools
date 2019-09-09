import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'emulators', loadChildren: './emulator/emulator.module#EmulatorModule' },
    { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
    { path: '', redirectTo: '/emulators', pathMatch: 'full'},
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
