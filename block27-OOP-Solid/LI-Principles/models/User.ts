import { IUser } from './IUser';
import IConnection from './IConnection';

export default abstract class User {
  public static initUser(user: IUser): IUser {
    const { id, username, email, password, role } = user;
    const newUser: IUser = {
      id,
      username,
      email,
      password,
      role,
    };
    return newUser;
  }

  public static async create(newUser: IUser, connection: IConnection): Promise<void> {
    await connection.execute(
      'INSERT INTO solid_example.users (username, email, password, role) VALUES (?,?,?,?)',
      [newUser.username, newUser.email, newUser.password, newUser.role],
    );
  }
}