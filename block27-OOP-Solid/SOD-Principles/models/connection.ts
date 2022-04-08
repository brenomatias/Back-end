import mysql from 'mysql2/promise';
import IConnection from './IConnection';

// connectio padrao

class MySQLConnection {
  static readonly conn: IConnection = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root' /* Se necessário, altere o user */,
    password: 'pass' /* Não se esqueça de inserir a senha aqui! */,
    database: 'solid_example',
  });
}

export default MySQLConnection;

// connection mocked
export class MockedConnection implements IConnection<any> {
  async execute(query: string, values: any): Promise<any> {
    console.log('MOCKED CONNECTION: Executando query: ', query, values);
  }
}