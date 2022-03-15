import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { AuthGuard } from './auth.guard';
import { CommunicationComponent } from './communication/communication.component';
import { ParentComponent } from './communication/parent/parent.component';
import { CompanyInfoComponent } from './contact-us/company-info/company-info.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {path:"login",component:LoginpageComponent},
  {path:"dashboard",component:DashboardComponent,
  canActivate:[AuthGuard],
  children:[
    {path:"create-employee",component:CreateEmployeeComponent},
    {path:"all-employees",component:AllEmployeesComponent},
    {path:"employee-details/:id",component:EmployeeDetailsComponent},
    {path:"contact-us",component:CompanyInfoComponent},
    {path:"communication",component:CommunicationComponent},
    {path:"shopping",component:ShoppingComponent},
    {path: 'about-us',loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)},
    {path: 'roles',loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule)},


  ],

  },
  {path:"",component:LoginpageComponent},
  {path:"**",component:PagenotfoundComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
