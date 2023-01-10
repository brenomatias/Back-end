import { Request, Response } from 'express';
import User from '../models/User';
import { IUser } from '../models/IUser';
// Interface do usuário, (o que o objeto espera receber)
import UserValidations from './userValidations';
// classe para validação de inputs
import IConnection from '../models/IConnection';

export default class UserController {

  constructor(private connection: IConnection) { }
  // RESOLUÇAO DO PRINCIPIO DE INVERSAO DE MODULOS
  // controller tambem nao depende da connection, 'alguem' manda pra ele
  // recebe a connection de quem esta mais externo
  // modulo recebe INTERFACE EM VEZ DE UMA IMPLEMENTAÇAO

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
      // req.body as IUser -> 'IUser' interface = regras de negocio

      await User.create(req.body as IUser, this.connection);
      // destrutura o 'req.body' -> COERSÃO DE 'req.body' para User

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

// INVERSÃO DE DEPENDENCIAS PARTE 2: (NAO LIDA COM IMPLEMENTAÇOES, LIDA COM INTERFACE)
// nao pode depender da implementação, tem que depender de uma interface