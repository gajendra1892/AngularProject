import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';
//import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
//import { DepartmentContactComponent } from './department-contact/department-contact.component';
//import { DepartmentDetailComponent } from './department-detail/department-detail.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { DepartmentListComponent } from './department-list/department-list.component';
// import { NewEmployeeListComponent } from './new-employee-list/new-employee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    // DepartmentListComponent,
    // NewEmployeeListComponent
    routingComponents
    //DepartmentOverviewComponent,
    //DepartmentContactComponent
    //DepartmentDetailComponent
    //PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
,  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
