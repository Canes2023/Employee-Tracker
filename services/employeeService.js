// services/employeeService.js
const Employee = require('../models/employee');

class EmployeeService {
  static async getAllEmployees() {
    const [rows] = await Employee.getAllEmployees();
    return rows;
  }

  static async addEmployee(firstName, lastName, roleId, managerId) {
    await Employee.addEmployee(firstName, lastName, roleId, managerId);
    console.log(`Employee ${firstName} ${lastName} added successfully.`);
  }

  static async updateEmployeeRole(employeeId, roleId) {
    await Employee.updateEmployeeRole(employeeId, roleId);
    console.log(`Employee role updated successfully.`);
  }
}

module.exports = EmployeeService;