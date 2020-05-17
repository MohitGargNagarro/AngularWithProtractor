import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

//Fire base Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule  } from '@angular/fire/auth';

// Application Components
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './components/header/header.component';

// Application services
import {EmployeeService} from './services/employee.service';
import {AuthService} from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFirestoreModule, // Firebase Module related to get data from firebase
    AngularFireModule.initializeApp(environment.firebase, 'angular-with-protractor'),
    AngularFireAuthModule // FireBase Module related to authentication from fire base
  ],
  providers: [EmployeeService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
