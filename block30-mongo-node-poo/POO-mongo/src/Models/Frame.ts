import { Schema, model as createModel, Document } from 'mongoose';
import Frame from '../Interfaces/Frame';
import MongoModel from './MongoModel';

interface FrameDocument extends Frame, Document { }
// EXTENDE a interface 'Frame' e 'Document(tipo basico do mongoose)'
// type FrameDocument = Frame & Document (daria no mesmo essa construçao)

// DEFINIÇÃO DO SCHEMA
const frameSchema = new Schema<FrameDocument>({
  material: String,
  color: String,
});


// CONSTRUÇAO(IMPLEMENTACAO) DO MODEL (MongoModel precisa de um argumento de tipo)
class FrameModel extends MongoModel<Frame> {
  constructor(model = createModel('Armacoes', frameSchema)) {
    super(model);
  }
}

export default FrameModel;