import { Request, Response } from 'express';
import User from '../models/User';
import { IUser } from '../models/IUser';
import UserValidations from './userValidations';
import IConnection from '../models/IConnection';

export default class UserController {
  constructor(private connection: IConnection) { }

  createUser = async (req: Request, res: Response) => {
    if (UserValidations.validateUser(req.body as IUser)) {
      await User.create(req.body as IUser, this.connection);
      res.status(200).json({
        message: 'Usuário criado com sucesso!',
      });
    } else {
      res.status(400).json({
        message: 'Dados inválidos.',
      });
    }
  };
}