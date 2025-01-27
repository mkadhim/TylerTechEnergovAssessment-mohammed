namespace angualr_with_asp.net_core.ClientApp.src.app.Components
{
  // src/app/components/add-employee.component.ts
  import { Component } from '@angular/core';
  import { EmployeeService } from '../services/employee.service';
  import { Employee } from '../models/employee.model';

  @Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html'
  })
  export class AddEmployeeComponent {
    newEmployee: Employee = { employeeID: 0, firstName: '', lastName: '' };

    constructor(private employeeService: EmployeeService) { }

    addEmployee(): void {
      this.employeeService.addEmployee(this.newEmployee)
        .subscribe(() => {
          // Optionally reload employee list or reset the form
        });
    }
  }



}
