const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'local',
    user: 'brenomatias@localhost',
    password: '24049504',
    database: 'cep_lookup',
    port: 3000
})