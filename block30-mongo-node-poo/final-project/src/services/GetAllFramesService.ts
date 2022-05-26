import { Frame } from "../entities/frame";
import { Service } from "./Service";

export interface GetAllFrameModel {
  getAll(): Promise<Frame[]>
}

export interface IGetAllFramesService extends Service<void, Frame[]> {}

export class GetAllFramesService implements IGetAllFramesService {
  constructor(
    private model: GetAllFrameModel
  ){}

  async execute(): Promise<Frame[]> {
    const frames = await this.model.getAll();

    return frames;
  }
}