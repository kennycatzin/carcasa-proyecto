import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const APPROUTES: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: DashboardComponent },
    { path: '**', component: NopagefoundComponent}
];
export const APP_ROUTES = RouterModule.forRoot( APPROUTES, { useHash: true } );
