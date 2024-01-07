// services/roleService.js
const Role = require('../models/role');

class RoleService {
  static async getAllRoles() {
    const [rows] = await Role.getAllRoles();
    return rows;
  }

  static async addRole(title, salary, departmentId) {
    await Role.addRole(title, salary, departmentId);
    console.log(`Role ${title} added successfully.`);
  }
}

module.exports = RoleService;