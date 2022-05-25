// implementa a interface do mongo criada em 'index.ts'
import { Model as MongooseModelInterface, Document } from 'mongoose'; // MODEL DO MONGOOSE
import Model from '.'; // vem do index.ts

abstract class MongoModel<T> implements Model<T> { // '<T>' é repassado para implementaçao do model -> tudo que implementar essa classe vai precisar de introduzir um tipo
  
  // MODEL DO MONGOOSE -> 'Document' tipo basico do mongoose (inicializa classe)
  constructor(protected model: MongooseModelInterface<T & Document>) { }
  // recebe um model que tem metodos do mongoose

  // recebe um objeto do tipo T 
  create = async (obj: T): Promise<T> => this.model.create({ ...obj });
  // 'this.model' -> model do mongoose

  read = async (): Promise<T[]> => this.model.find();
  
  // read by id
  readOne = async (id: string): Promise<T | null> =>
    this.model.findOne({ id });
  
  async update(id: string, data: T): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }
}

export default MongoModel;

// onde essa classe for estendida, aplicada, o '<T>' garante a inseração de um tipo
// na utilizaçao dessa classe

//'<T>' -> tipo generico


/// **** UTILIZA ESSA CLASSE NOS DEMAIS MODELS(exceto index.ts)