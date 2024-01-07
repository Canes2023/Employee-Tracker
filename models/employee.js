// models/employee.js
const connection = require('../db/connection');

class Employee {
  static getAllEmployees() {
    return connection.promise().query('SELECT * FROM employee');
  }

  static addEmployee(firstName, lastName, roleId, managerId) {
    return connection.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
  }

  static updateEmployeeRole(employeeId, roleId) {
    return connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
  }
}

module.exports = Employee;