const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'brenomatias@localhost', 
  password: 'senha123', 
  database: 'rest_exercicios'});

module.exports = connection;