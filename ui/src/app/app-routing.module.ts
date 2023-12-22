import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from "./employee/employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./employee/create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./employee/update-employee/update-employee.component";
import {EmployeeDetailComponent} from "./employee/employee-detail/employee-detail.component";

const routes: Routes = [
  {path: 'employeeList', component: EmployeeListComponent},
  {path: 'createEmployee', component: CreateEmployeeComponent},
  {path: 'updateEmployee/:id', component: UpdateEmployeeComponent},
  {path: 'getEmployee/:id', component: EmployeeDetailComponent},
  {path: '', redirectTo: 'employeeList', pathMatch: 'full'},
  {path: '**', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
