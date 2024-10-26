import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './modules/login/signin/signin.component';
import { UserRegistrationComponent } from './modules/user/user-registration/user-registration.component';
import { AdminDashboardComponent } from './modules/admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path:'', component: SigninComponent},
  { path: 'user/register', component: UserRegistrationComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
