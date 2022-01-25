const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'brenomatias@localhost', 
  password: '24049504', 
  database: 'rest_exercicios'});

module.exports = connection;