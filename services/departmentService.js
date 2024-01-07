// services/departmentService.js
const Department = require('../models/department');

class DepartmentService {
  static async getAllDepartments() {
    const [rows] = await Department.getAllDepartments();
    return rows;
  }

  static async addDepartment(name) {
    await Department.addDepartment(name);
    console.log(`Department ${name} added successfully.`);
  }
}

module.exports = DepartmentService;