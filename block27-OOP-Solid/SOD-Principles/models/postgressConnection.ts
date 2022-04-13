import mysql from 'mysql2/promise';

interface PostgressConnection {
    connection: string,

}

const connection = mysql.createPool({
    host:
    port:
    user:
    db:
})


export default connection;

