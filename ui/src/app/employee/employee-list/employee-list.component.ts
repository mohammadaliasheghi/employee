import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  private getEmployeeList(): void {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employeeList = data;
    });
  }

  updateEmployee(id: number): void {
    this.router.navigate(['/updateEmployee', id]).then(() => true);
  }

  getEmployee(id: number): void {
    this.router.navigate(['/getEmployee', id]).then(() => true);
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployeeList();
    });
  }
}
