import express from 'express';
import UserController from './controllers/userController';
import MySQLConnection, { MockedConnection } from './models/connection';
import IConnection from './models/IConnection';

const app = express();

app.use(express.json());


let conn: IConnection;
if (process.env.ENV === `devel`) {
  conn = new MockedConnection();
} else {
  conn = MySQLConnection.conn;
}


app.post('/users', new UserController(new MockedConnection()).createUser);
// 'new' isntanciando um objeto utilizando o método 'createUser' do controller
// connection no controlador e a connection passa para o 'createUser'

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});