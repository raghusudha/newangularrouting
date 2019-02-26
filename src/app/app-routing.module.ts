import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path:"login",
  component:LoginComponent
},
{
  path:"logout",
  component:LogoutComponent
},
{
  path:"homepage",
  component:HomepageComponent
},
{
  path:"dashboard",
  component:DashboardComponent
},
{
  path:"",
  redirectTo:"/homepage",
  pathMatch:"full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
