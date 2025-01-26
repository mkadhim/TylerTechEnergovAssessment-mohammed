namespace angualr_with_asp.net_core.ClientApp.src.app.services
{

  // src/app/services/employee.service.ts
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Employee } from '../models/employee.model';

  @Injectable({
    providedIn: 'root'
  })
  export class EmployeeService {
    private apiUrl = 'https://localhost:5001/api/employees';

    constructor(private http: HttpClient) { }

    getEmployeesByManager(managerId: number): Observable<Employee[]> {
      return this.http.get<Employee[]>(`${this.apiUrl}/${managerId}`);
    }

    addEmployee(employee: Employee): Observable<Employee> {
      return this.http.post<Employee>(this.apiUrl, employee);
    }
  }


}
