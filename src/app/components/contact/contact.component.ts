import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators,FormControl,ReactiveFormsModule} from  '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

contactForm:FormGroup;
isSubmit =true;
submitMessage ='';
  constructor (private formbuilder:FormBuilder,private router:Router, private auth:AuthService){

    this.contactForm=this.formbuilder.group({

      name:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      Message:['',Validators.required],


    })

  }


ngOnInit(){

}
submitData(value:any){
  console.log(value);
  this.isSubmit=true;
  this.submitMessage ='Submitted successfully';
  setTimeout(() => {
    this.isSubmit=false
   alert('Contact Submitted');

  }, 8000);

}

}
