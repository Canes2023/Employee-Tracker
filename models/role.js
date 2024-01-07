// models/role.js
const connection = require('../db/connection');

class Role {
  static getAllRoles() {
    return connection.promise().query('SELECT * FROM role');
  }

  static addRole(title, salary, departmentId) {
    return connection.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
  }
}

module.exports = Role;