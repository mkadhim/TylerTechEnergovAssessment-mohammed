// Models/Employee.cs
public class Employee
{
    public int EmployeeID { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int? ManagerID { get; set; }
}

// Models/Role.cs
public class Role
{
    public int RoleID { get; set; }
    public string RoleName { get; set; }
}