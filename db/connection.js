const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'canes2023',
  database: 'employee_tracker',
});

module.exports = connection;