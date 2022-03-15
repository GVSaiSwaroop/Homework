import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ContactUsModule } from './contact-us/contact-us.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CommunicationComponent } from './communication/communication.component';
import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductDetailsComponent } from './shopping/product-details/product-details.component';
import { ProductsListComponent } from './shopping/products-list/products-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    DashboardComponent,
    CreateEmployeeComponent,
    AllEmployeesComponent,
    EmployeeDetailsComponent,
    CommunicationComponent,
    ParentComponent,
    ChildComponent,
    ShoppingComponent,
    ProductDetailsComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ContactUsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
