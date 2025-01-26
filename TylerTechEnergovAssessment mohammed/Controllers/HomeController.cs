using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using TylerTechEnergovAssessment_mohammed.Models;

namespace TylerTechEnergovAssessment_mohammed.Controllers
{

    // Controllers/EmployeesController.cs
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using System.Linq;

    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EmployeesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("{managerId}")]
        public IActionResult GetEmployeesByManager(int managerId)
        {
            var employees = _context.Employees
                                     .Where(e => e.ManagerID == managerId)
                                     .ToList();
            return Ok(employees);
        }

        [HttpPost]
        public IActionResult AddEmployee([FromBody] Employee employee)
        {
            _context.Employees.Add(employee);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetEmployeesByManager), new { id = employee.EmployeeID }, employee);
        }
    }
}