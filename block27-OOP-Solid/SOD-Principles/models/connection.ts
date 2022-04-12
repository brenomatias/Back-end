import mysql from 'mysql2/promise';
import IConnection from './IConnection';

// connection padrao

class MySQLConnection {
  static readonly conn: IConnection = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root' /* Se necessário, altere o user */,
    password: '24049504' /* Não se esqueça de inserir a senha aqui! */,
    database: 'solid_example',
  });
}

export default MySQLConnection;

// connection mocked
// usado para fazer testes
// para nao rodar o banco(para rodar banco na memoria)
export class MockedConnection implements IConnection {
  async execute(query: string, values: any): Promise<any> {
    console.log('MOCKED CONNECTION: Executando query: ', query, values);
  }
}