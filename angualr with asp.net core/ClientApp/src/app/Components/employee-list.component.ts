namespace angualr_with_asp.net_core.ClientApp.src.app.Components
{
   // src/app/components/employee-list.component.ts
import { Component, OnInit
}
from '@angular/core';
import
{ EmployeeService }
from '../services/employee.service';
import
{ Employee }
from '../models/employee.model';

@Component({
selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit
{
  employees: Employee [] = [];
  selectedManagerId: number;

  constructor(private employeeService: EmployeeService) { }

ngOnInit(): void
{
  this.loadEmployees();
}

loadEmployees(): void
{
  this.employeeService.getEmployeesByManager(this.selectedManagerId)
    .subscribe(data => this.employees = data);
}
}
}
