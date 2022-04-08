import { IUser } from "../models/IUser";

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
    // ta ruim isso! NAO É ESCALÁVEL
    // sempre que surgir um papel novo no sistema essa funçao deve ser modificada -> 

    static validateUser = (user: IUser): boolean => {
        return UserValidations.validateEmail(user.email)
            && UserValidations.validatePassword(user.password)
            && UserValidations.validateRole(user.role);
    }
}