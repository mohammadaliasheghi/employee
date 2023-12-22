import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {HttpClientModule} from "@angular/common/http";
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {FormsModule} from "@angular/forms";
import {EmployeeDetailComponent} from './employee/employee-detail/employee-detail.component';
import {UpdateEmployeeComponent} from './employee/update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    EmployeeDetailComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
