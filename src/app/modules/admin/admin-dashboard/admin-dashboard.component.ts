import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  reportsVisible = false; // Controls visibility of the reports section
  reports: string[] = ['User Growth Report', 'Sales Report', 'Activity Log']; // Example reports

  constructor(private router: Router) {} // Inject Router

  // Method to manage users
  manageUsers() {
    // Logic for managing users (e.g., navigating to a user management page)
    console.log('Manage Users clicked!');
    this.router.navigate(['/user/manage']); // Adjust this path based on your routing setup
  }

  // Method to toggle visibility of reports
  viewReports() {
    this.reportsVisible = !this.reportsVisible; // Toggle the visibility
    console.log('View Reports clicked!', this.reportsVisible);
  }

  logout(){
    this.router.navigate(['']);
  }
}
