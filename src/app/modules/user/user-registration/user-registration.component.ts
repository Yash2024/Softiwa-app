import { Component } from '@angular/core';
import { User, UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  user: User = { id: 0, name: '', email: '', password: '' ,role:''}; // Ensure this matches your User interface
  message: string = ''; // Add message property
  constructor(private userService: UserService) {}

  register() {
    this.userService.addUser(this.user).subscribe(
      response => {
        this.message = response;  // Response from Spring Boot
      },
      error => {
        console.error('Error occurred during registration:', error);
        this.message = 'Registration failed!';
      }
    );
  }
}
