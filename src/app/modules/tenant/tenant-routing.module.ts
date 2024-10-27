import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantDashboardComponent } from './tenant-dashboard/tenant-dashboard.component';
import { CreateBranchComponent } from '../../core/components/create-branch/create-branch.component';

const routes: Routes = [
  {path:'dashboard', component: TenantDashboardComponent, 
    children: [
      {path: 'create-branch', component: CreateBranchComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRoutingModule { }
