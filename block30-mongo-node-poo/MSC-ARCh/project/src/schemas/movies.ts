import { Schema } from "mongoose";

// INICIAR NOVO SCHEMA
// interface para garantia de entrada de dados do jeito correto
const movieSchema = new Schema<IMovie>({
    title: String, // essa string é do proprio javascript
    year: { type: Number },
    classification: { type: Number, required: true },
    starring: [String],
    director: String,
    // genres: [{ type: String }],
    genres: { type: [String, Number], required: true },
    length: Number
  });

// new Schema({ atributos do documento })
// omite '_id' porque ele ja vem por padrão


// INTERFACE PARA GARANTIR QUE O SCHEMA ESTA SENDO CONSTRUIDO CORRETAMENTE
export interface IMovie {
  title: string,
  year: number,
  classification: number,
  starring: string[],
  director: string,
  genres: string[],
  length: number
}

export default movieSchema;


// passar tipo como parametro -> '<IMovie>' <tipo>' -> generics