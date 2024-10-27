import { Component } from '@angular/core';
import { User, UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant-dashboard',
  templateUrl: './tenant-dashboard.component.html',
  styleUrl: './tenant-dashboard.component.css'
})
export class TenantDashboardComponent {
  constructor(private service: UserService, private router: Router){}

  user: User|undefined;
  ngOnInIt(){
    // this.user=this.service.findByEmail()
  }

  logout(){
    this.router.navigate(['']);
  }
}
