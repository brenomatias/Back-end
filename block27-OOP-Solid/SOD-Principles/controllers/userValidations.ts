import { IUser } from "../models/IUser";
import User from "../models/User";

// CLASSE PARA VALIDAÇÃO
// tipo de uso dessa classe: validação
// classe abstrata para nao ser instaciada

export default abstract class UserValidations {

    // NAO TEM THIS NO MÉTODO, ELE DEVE SER ESTÁTICO
    static validateEmail = (email: string): boolean => {
        const emailRegex = /\S+@\S+\.\S/;
    
        return emailRegex.test(email);
      }
    // quando por ex, tiver que mudar a validação da string, so muda aqui o codigoa
    
    static validatePassword = (password: string): boolean => {
        const passwordRegex = /^\d+$/; /* Senha pode ter apenas números */

        return passwordRegex.test(password);
    }
     
    // comparaçao booelana
    static validateRole = (role: string): boolean => {
        return role === 'admin' || role === 'user';
    }
    // ta ruim isso! NAO É ESCALÁVEL -
    // sempre que surgir um papel novo no sistema essa funçao deve ser modificada -> esta aberto pra modificaçao. Por exemplo, role pode ser adicionado de mais um 'admin', 'user', 'lala'


    // AGREGADO DE VALIDAÇÃO PARA OBEDECER OS PRINCIPIOS DE SO
    static validateUser = (user: IUser): boolean => {
        return UserValidations.validateEmail(user.email) // RETORNA A CLASSE
            && UserValidations.validatePassword(user.password)
            && UserValidations.validateRole(user.role);
            // && ... 'extensão da função'
    }
}

// tudo que e estatico aparece sem a necessidade de 'new' 
// todo os metodos que sao estaticos
// tudo que e estatico ja esxite na classe sem dar 'new'
// se nao for estatico so acessa o metodo se user o 'new'
            // UserValidations.validateEmail; -> é estático (nao precisa de new pra acessar na classe para acessar)