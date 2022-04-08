import { Request, Response } from 'express';
import User from '../models/User';
import { IUser } from '../models/IUser';
// Interface do usuário, (o que o objeto espera receber)
import UserValidations from './userValidations';
// classe para validação de inputs
import IConnection from '../models/IConnection';

export default class UserController {

  constructor(private connection: IConnection) { }
  

// 'Função 'createUser'
  // pra que que alguem vai usar esta funçao? FINALIDADE - CASO DE USO
  // quando a regra de negocio mudar, mude o controlador
  // validações nao podem ficar aqui porque fere o principio Single
  // ou seja, nem as 'req.body' podem ser definidas aqui porque se mudar o contrato de 'User'(o que ele recebe), teria uqe mudar aqui tambem
  // todas as coisas que a funçao faz deve estar relacionado ao caso de uso
  // CASO USO: criar um usuário
  // checa validaçao, nao implementa validação
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

// UserValidation


}