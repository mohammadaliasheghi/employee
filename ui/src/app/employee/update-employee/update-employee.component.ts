import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number = 0;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(data => {
      this.employee = data;
    });
  }

  onSubmit(): void {
    this.update();
  }

  private update(): void {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    })
  }

  public goToEmployeeList(): void {
    this.router.navigate(['/employeeList']).then(() => true);
  }
}
