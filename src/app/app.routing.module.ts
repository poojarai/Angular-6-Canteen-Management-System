import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from './auth-guard';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent ,
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent , pathMatch: 'full'},
  { path: 'signup', component: SignupFormComponent,  pathMatch: 'full' },
  // { path: 'admin', loadChildren:'./admin-portal/admin-portal.module#AdminModule'} 
  // { path: 'home', component: HomeComponent,  pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'admin', component: AdminPortalComponent,  pathMatch: 'full', canActivate: [AuthGuard], data: { expectedRole: 'admin'}  },
  { path: 'employee', component: EmployeePortalComponent,  pathMatch: 'full', canActivate: [AuthGuard], data: { expectedRole: 'employee'}  },

];


@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,  {enableTracing: false, useHash : true })
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
