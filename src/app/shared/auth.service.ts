import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firauth: AngularFireAuth, private router: Router ) { }


  login(email:string, password:string){

    this.firauth.signInWithEmailAndPassword(email,password).then(res=>{
    localStorage.setItem('token','true');
     alert('login successfull');


    if(res.user?.emailVerified == true){
      this.router.navigate(['dashboard']);
    } else{
      this.router.navigate(['verify-email']);
    }

    },err =>{
  alert(err.message);
  this.router.navigate(['/joinnow']);
    })
  }


  register(email:string, password:string){
    this.firauth.createUserWithEmailAndPassword(email,password).then(res=>{
      alert(' Regisration Successfull');
      this.router.navigate(['/joinnow']);
      this.sendEmailForVerification(res.user);

    },err=>{
      alert(err.message);
      this.router.navigate(['/signup']);
    })


  }

  logout(){
    this.firauth.signOut().then(()=>{
  localStorage.removeItem('token');
  this.router.navigate(['/joinnow']);

    },err=>{
      alert(err.message);

    })
  }

  forgotpassword(email:string){
    this.firauth.sendPasswordResetEmail(email).then(()=>{
  this.router.navigate(['verify-email']);
    },err=>{
alert('Some thing Went Wrong');
    })
  }


  sendEmailForVerification(user:any){
    user.sendEmailForVerification().then((res:any)=>{

      this.router.navigate(['verify-email']);

    },(err:any)=>{

      alert('Something Went Wrong.Not able to Snd mail to your Email Account');

    },(err:any)=>{
      alert('Failed to Sent mail');
    })

  }


}
