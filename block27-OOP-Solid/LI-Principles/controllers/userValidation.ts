import { IUser } from "../models/IUser";

export default abstract class UserValidations {
    static validateEmail = (email: string): boolean => {
        const emailRegex = /\S+@\S+\.\S/;
    
        return emailRegex.test(email);
      }
    
    static validatePassword = (password: string): boolean => {
        const passwordRegex = /^\d+$/; /* Senha pode ter apenas números */

        return passwordRegex.test(password);
    }

    static validateRole = (role: string): boolean => {
        return role === 'admin' || role === 'user';
    }

    static validateUser = (user: IUser): boolean => {
        return UserValidations.validateEmail(user.email)
            && UserValidations.validatePassword(user.password)
            && UserValidations.validateRole(user.role);
    }
}