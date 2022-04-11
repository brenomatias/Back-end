import { IUser } from './IUser';
import IConnection from './IConnection';
// import connection from './connection';

// classe genérica abstrata
// esta classe nao pode ser instanciada -> nao pode dar um new nela
// classe abstrata nao usa construtor por padrão
export default abstract class User {

// iniciar usuário
  public static initUser(user: IUser): IUser {
    const { id, username, email, password, role } = user;

    // IUser = interface
    const newUser: IUser = {
      id,
      username,
      email,
      password,
      role,
    };
    return newUser;
  }

  // criar usuário no banco
  public static async create(newUser: IUser, connection: IConnection): Promise<void> {
    await connection.execute(
      'INSERT INTO solid_example.users (username, email, password, role) VALUES (?,?,?,?)',
      [newUser.username, newUser.email, newUser.password, newUser.role],
    );
  }
}

// principio de INVERSÃO DE DEPENDENCIAS:

// ESTA CLASSE NAO PODE DEPENDER DE MODULOS MAIS INTERNOS: 
// antes no caso era a connection.ts
// import connection from './connection'; -> asssim depende de um modulo mais interno
// 'se mudar de connection de um outro tipo (postgressConnection.ts)
// teria que modificar este arquivo e importar a conexao aqui
// ou seja, esta conexao e mais interna - tem que modificar ele sempre que 
// o modulo mais interno mudar
// esta classe nao pode saber qual connection vai usar

// como foi resolvido esta questao da importação aqui:
// 'nao queremos modificar User sempre que mudarmos a connection'
// DESACLOPAMENTO = classe User nao depende da implementaçao da classe connection
// receber connection no método create

// antes: 

// public static async create(newUser: IUser): Promise<void> {
//     ...
// }

// depois: 

// public static async create(newUser: IUser, connection: IConnection): Promise<void> {

// user nao depende mais da implementaçao de um modulo mais interno que ele