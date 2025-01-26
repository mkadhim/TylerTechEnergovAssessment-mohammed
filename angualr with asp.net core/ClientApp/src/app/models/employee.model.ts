namespace angualr_with_asp.net_core.ClientApp.src.app.models
{
  // src/app/models/employee.model.ts
  export interface Employee {
    employeeID: number;
    firstName: string;
    lastName: string;
    managerID?: number;
  }
}
