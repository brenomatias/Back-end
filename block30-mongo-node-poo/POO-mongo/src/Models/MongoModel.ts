import { Model as MongooseModelInterface, Document } from 'mongoose';
import Model from '.'; // vem do index.ts

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: MongooseModelInterface<T & Document>) { }

  create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> =>
    this.model.findOne({ id });
  
  async update(id: string, data: T): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }
}

export default MongoModel;