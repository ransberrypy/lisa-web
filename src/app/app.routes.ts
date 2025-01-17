import { Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TenantComponent } from './components/tenant/tenant.component';
import { PropertyComponent } from './components/property/property.component';
import { PropertyCreateComponent } from './components/property/property-create/property-create.component';
import { PropertyListComponent } from './components/property/property-list/property-list.component';
import { PropertyDetailComponent } from './components/property/property-detail/property-detail.component';

export const routes: Routes = [
    { path: 'login', component: LoginpageComponent },
    { path: 'tenants', component: TenantComponent },

    {
        path: 'properties', component: PropertyComponent,
        children: [
            { path: 'create', component: PropertyCreateComponent },
            { path: 'list', component: PropertyListComponent },
            { path: 'detail/:id', component: PropertyDetailComponent },
            { path: '', redirectTo: 'list', pathMatch: 'full' }
        ]
    },


    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }, // Handle unknown routes
];



