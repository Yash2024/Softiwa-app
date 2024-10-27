import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './modules/login/signin/signin.component';
import { UserRegistrationComponent } from './modules/user/user-registration/user-registration.component';
import { AdminDashboardComponent } from './modules/admin/admin-dashboard/admin-dashboard.component';
import { TenantDashboardComponent } from './modules/tenant/tenant-dashboard/tenant-dashboard.component';

const routes: Routes = [
  { path:'', component: SigninComponent},
  { path: 'user/register', component: UserRegistrationComponent },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'tenant' , loadChildren: () => import('./modules/tenant/tenant.module').then(m => m.TenantModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
