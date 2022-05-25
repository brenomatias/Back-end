import mongoose from "mongoose";
import movieSchema, { IMovie } from "../schemas/movies";

export default class MovieModel {
  constructor(
    private model = mongoose.model('movies', movieSchema) // private: encapsulamento
  ){}
   // construtor para inicializar propriedade (model)
  // 'mongoose.model' -> mongoose
  // 'movies' -> mongoose colection
  // movieSchema -> schema name


  // create
  async create(movie: IMovie): Promise<IMovie & { _id: mongoose.Types.ObjectId }> {
    const created = await this.model.create(movie);
    
    return created;
  }
  // '{ _id: mongoose.Types.ObjectId }' -> garante que o create vai retornar a chave '_id' (deixa explicito que queremos este retorno)
  // acessar '_id' -> 'created._id'


  // getAll
  async getAll(): Promise<IMovie[]> {
    return this.model.find();
  }
  

  // getByYer
  async getByYear(year: number): Promise<IMovie[]> {
    return this.model.find({ year })
  }

  // updateById
  async updateById(id: string, movieData: Partial<IMovie>): Promise<void> {
    await this.model.updateOne({ id }, movieData)
  }
  // 'Partial' -> utilities typescript
  // Constructs a type with all properties of Type set to optional.
  // 'Partial' faz todo as prop serem opcionais

  // deleteById
  async deleteById(id: string): Promise<void> {
    await this.model.deleteOne({ id });
  }
}



// UTILITIES TYPES TYPESCRITP
/// https://www.typescriptlang.org/docs/handbook/utility-types.html

// retornar 'void' para validar erros