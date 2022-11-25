import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { JoinnowComponent } from './components/joinnow/joinnow.component';
import { AboutComponent } from './components/about/about.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { MakesignupComponent } from './components/makesignup/makesignup.component';
import { AngularFireModule } from '@angular/fire/compat';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { ChangepasswordComponent } from './component/changepassword/changepassword.component';
import { JavaComponent } from './component/java/java.component';
import { SearchComponent } from './component/search/search.component';
import { LogoutComponent } from './component/logout/logout.component';
import { Home2Component } from './component/home2/home2.component';
import { NodeComponent } from './component/node/node.component';
import { ReactComponent } from './component/react/react.component';
import { PopupComponent } from './component/popup/popup.component';
import { ToastComponent } from './component/toast/toast.component';
import { ConfirmComponent } from './component/confirm/confirm.component';



const firebaseConfig = {
  apiKey: "AIzaSyCaWxNhVrBDDK8bDd7hwlUIDQBhXH-oeiM",
  authDomain: "authentication-system-c65a7.firebaseapp.com",
  projectId: "authentication-system-c65a7",
  storageBucket: "authentication-system-c65a7.appspot.com",
  messagingSenderId: "904652672138",
  appId: "1:904652672138:web:d07baba25a757993317173",
  measurementId: "G-J31DM0695K"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    JoinnowComponent,
    AboutComponent,
    SignupComponent,
    ContactComponent,
    ForgotpasswordComponent,
    MakesignupComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ChangepasswordComponent,
    JavaComponent,
    SearchComponent,
    LogoutComponent,
    Home2Component,
    NodeComponent,
    ReactComponent,
    PopupComponent,
    ToastComponent,
    ConfirmComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(firebaseConfig),
   HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
