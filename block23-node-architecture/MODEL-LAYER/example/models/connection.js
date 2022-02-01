const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    user: 'brenomatias@localhost',
    password: '24049504',
    host: 'localhost',
    database: 'model_example'

}); // forma de reaproveitar conexões com mysql

module.exports = connection ;