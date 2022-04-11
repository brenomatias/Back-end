import { IUser } from './IUser';
import IConnection from './IConnection';

// esta classe nao pode ser instanciada -> nao pode dar um new nela
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