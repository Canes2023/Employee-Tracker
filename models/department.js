// models/department.js
const connection = require("../db/connection");

class Department {
  static getAllDepartments() {
    return connection.promise().query("SELECT * FROM department");
  }

  static addDepartment(name) {
    return connection
      .promise()
      .query("INSERT INTO department (name) VALUES (?)", [name]);
  }
}

module.exports = Department;
