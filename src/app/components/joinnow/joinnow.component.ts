import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators,FormControl,ReactiveFormsModule} from  '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {
  email: string='';
  password: string='';

  constructor(private auth:AuthService,private router:Router) {



  }

  ngOnInit(): void {
  }
 login()
 {
  if(this.email == ''){
    alert('please enter your email');
    return;
  }
  if(this.password == ''){
    alert('please enter correct password');
    return;
  }
  this.auth.login(this.email,this.password);
  this.email='';
  this.password='';
 }

}

