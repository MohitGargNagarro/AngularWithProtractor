import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{path: '', redirectTo: '/employees', pathMatch: 'full'},
{path: 'employees', component: EmployeeComponent, canActivate: [AuthGuard]},
{path: 'add-employee', component: AddEmployeeComponent, canActivate: [AuthGuard]},
{path: 'sign-in', component: SignInComponent},
{path: 'sign-up', component: SignUpComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
