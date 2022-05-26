import { ZodError } from 'zod';
import Model from '../Models';

// service tambem funciona como contrato (regra de negocio)
// 'this'  se refere a propria classe, na instancia de um objeto da classe
export interface ServiceError {
  error: ZodError;
}
abstract class Service<T> {
  constructor(protected model: Model<T>) { }

  public async create(obj: T): Promise<T | null | ServiceError> {
    return this.model.create(obj);
  }

  public async read(): Promise<T[]> {
    return this.model.read();
  }

  public async readOne(id: string): Promise<T | null | ServiceError> {
    return this.model.readOne(id);
  }

  public async update(id: string, data: T): Promise<T | null | ServiceError> {
    return this.model.update(id, data);
  }
}

export default Service;