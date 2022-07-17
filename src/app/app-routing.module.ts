import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login/login.component';
import { ManagementComponent } from './management/management/management.component';
// import { 
//   AuthGuardService as AuthGuard 
// } from './guards/auth.guard';
// import { 
//   RoleGuardService as RoleGuard 
// } from './guards/role-guard-service.guard'

const routes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'home', component: HeaderComponent },
   { path: 'roguemin', component: ManagementComponent },
  //  { 
  //   path: 'admin', 
  //   component: AdminComponent, 
  //   canActivate: [RoleGuard], 
  //   data: { 
  //     expectedRole: 'admin'
  //   } 
  // },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
