import { CastError, model as createModel, Model, Schema } from "mongoose";
import { Frame, FrameColor, FrameMaterial } from "../entities/frame";
import { CreateFrameModel } from "../services/CreateFrameService";
import { GetAllFrameModel } from "../services/GetAllFramesService";
import { GetFrameByIdModel } from "../services/GetFrameByIdService";

const frameSchema = new Schema<Frame>({
  color: { type: String, enum: [FrameColor.BLACK, FrameColor.WHITE], required: true },
  material: { type: String, enum: [FrameMaterial.ACETATO, FrameMaterial.METAL], required: true }
})

export class FrameMongooseModel implements GetAllFrameModel, GetFrameByIdModel, CreateFrameModel {
  constructor(
    private Model: Model<Frame> = createModel('frames', frameSchema)
  ){}

  async getAll(): Promise<Frame[]> {
    const frames = await this.Model.find();

    return frames;
  }

  async getById(id: string): Promise<Frame | null> {
    try {
      const frame = await this.Model.findById(id);

      return frame;
    } catch(err) {
      if(err instanceof Error && err.name === 'CastError' && (err as CastError).kind === "ObjectId" ){
        return null;
      }

      throw new Error('MODEL_ERROR');
    }
  }

  async create(frame: Frame): Promise<{ id: string; }> {
    const { id } = await this.Model.create(frame);

    return { id };
  }
}