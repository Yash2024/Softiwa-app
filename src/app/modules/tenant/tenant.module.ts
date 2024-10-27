import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantRoutingModule } from './tenant-routing.module';
import { TenantDashboardComponent } from './tenant-dashboard/tenant-dashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TenantDashboardComponent
  ],
  imports: [
    CommonModule,
    TenantRoutingModule,
    FormsModule
  ]
})
export class TenantModule { }
