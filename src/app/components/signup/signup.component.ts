import { Component, OnInit } from '@angular/core';


import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username:string='';
  email: string='';
  password: string='';
  Address: string='';
  constructor(private auth:AuthService) {


  }

  ngOnInit(): void {
  }


  signup()
  {
   if(this.email == ''){
     alert('please enter your email');
     return;
   }
   if(this.password == ''){
     alert('please enter correct password');
     return;
   }
   this.auth.register(this.email,this.password);
   this.email='';
   this.password='';
  }
}

