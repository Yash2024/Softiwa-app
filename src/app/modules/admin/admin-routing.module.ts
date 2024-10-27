import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddTenantComponent } from '../../core/components/add-tenant/add-tenant.component';

const routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent ,
    children: [
      { path: 'add-tenant', component: AddTenantComponent }  // Child path
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
