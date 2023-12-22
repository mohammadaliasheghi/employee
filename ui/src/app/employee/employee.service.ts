import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private BaseURL: string = "http://127.0.0.1:8530/employee";

  constructor(private httpClient: HttpClient) {
  }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.BaseURL}` + '/list');
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post<Object>(`${this.BaseURL}` + '/create', employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put<Object>(`${this.BaseURL}` + '/update' + `/${id}`, employee);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.BaseURL}` + '/get' + `/${id}`);
  }

  deleteEmployee(id: number): Observable<Employee[]> {
    return this.httpClient.delete<Employee[]>(`${this.BaseURL}` + '/delete' + `/${id}`);
  }
}
