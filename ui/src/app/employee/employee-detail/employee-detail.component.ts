import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  id: number = 0;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(data => {
      this.employee = data
    })
  }

  redirect(): void {
    this.router.navigate(['/employeeList']).then(() => true);
  }
}
