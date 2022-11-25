import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './component/confirm/confirm.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { Home2Component } from './component/home2/home2.component';
import { JavaComponent } from './component/java/java.component';
import { LogoutComponent } from './component/logout/logout.component';
import { NodeComponent } from './component/node/node.component';
import { PopupComponent } from './component/popup/popup.component';
import { ReactComponent } from './component/react/react.component';
import { SearchComponent } from './component/search/search.component';
import { ToastComponent } from './component/toast/toast.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { JoinnowComponent } from './components/joinnow/joinnow.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'joinnow', pathMatch: 'full'},
  { path: 'joinnow', component: JoinnowComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'java', component: JavaComponent},
  { path: '', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'forgotpassword', component: ForgotPasswordComponent},
  { path: 'verify-email', component: VerifyEmailComponent},
  { path: 'course', component: CourseComponent},

  { path: 'about', component: AboutComponent},

  { path: 'contact', component: ContactComponent},
  { path: 'search/:searchTerm', component: JavaComponent},

  { path: 'Logout', component: LogoutComponent},
  { path: 'Home2', component: Home2Component},
  { path: 'node', component: NodeComponent},
  { path: 'react', component: ReactComponent},
  { path: 'popup', component: PopupComponent},
  { path: 'confirm', component: ConfirmComponent},
  { path: 'toast', component: ToastComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
