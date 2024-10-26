// src/app/core/services/user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface User {
  id: number;        // You can keep this if you want to manage user IDs
  name: string;      // Add this property
  email: string;
  password: string;  // Add this property
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users/register'; 
  constructor(private http: HttpClient) { }
  private users: User[] = [];

  findByEmail(email: string): User | undefined {
    return this.users.find(u => u.email === email);
  }

  addUser(user: User) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, user, { headers, responseType: 'text' });
    //this.users.push(user);
  }

  getUsers(): User[] {
    return this.users;
  }

  // Getter for id
  get id(): number {
    return this.id;
  }

  // Setter for id
  set id(value: number) {
    this.id = value;
  }

  // Getter for name
  get name(): string {
    return this.name;
  }

  // Setter for name
  set name(value: string) {
    this.name = value;
  }

  // Getter for email
  get email(): string {
    return this.email;
  }

  // Setter for email
  set email(value: string) {
    this.email = value;
  }

  // Getter for password
  get password(): string {
    return this.password;
  }

  // Setter for password
  set password(value: string) {
    this.password = value;
  }

}
