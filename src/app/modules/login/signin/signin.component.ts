import { Component } from '@angular/core';
import { User, UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  showinc: boolean=false;
  email: string='';
  inpuser: User = { id: 0, name: '', email: '', password: '' ,role:''};
  password: string ='';
  loggedin: boolean=false;
  emailError: string='';
  superemail: string='ladudpsg@gmail.com';
  superpass: string='000';
 
  constructor(private service: UserService , private router: Router) {
   }
 
   ngOnInit(): void {
   }
 
   //to validate the email
   validateEmail() {
     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if (!this.email.match(emailPattern)) {
       this.emailError = 'Please enter a valid email address.';
     } else {
       this.emailError = '';
     }
   }

   clear(){
    this.email='';
    this.password='';
   }
   
  login(){
    // console.log(this.email);
   let user:User|undefined;
   user=this.service.findByEmail(this.email);
 
   if(user===undefined){
     this.showinc=true;
   }
   else{
     // to show a success modal or failure inline message, stating the password is not valid.
     if(user.password===this.password)
     {
       this.loggedin=true;
       this.showinc=false;
       console.log(user.role);
       if(user.role =='superadmin'){
        // console.log("inside");
        this.router.navigate(['super-admin']);
       }
       if(user.role =='tenant'){
        // console.log("inside");
        this.router.navigate(['tenant-admin']);
       }
       
     }
     else{
       this.showinc=true;
       this.loggedin=false;
     }
   }
  }
}
