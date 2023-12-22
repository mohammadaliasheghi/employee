import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.create();
  }

  create(): void {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
        console.log(data);
        this.goToEmployeeList();
      }
    )
  }

  public goToEmployeeList(): void {
    this.router.navigate(['/employeeList']).then(() => true);
  }
}
