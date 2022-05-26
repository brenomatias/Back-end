import { Frame } from "../entities/frame";
import { Service } from "./Service";

export interface GetFrameByIdModel {
  getById(id: string): Promise<Frame | null>
}

export type IGetFrameByIdService = Service<string, Frame | null> 

export class GetFrameByIdService implements IGetFrameByIdService {
  constructor(
    private model: GetFrameByIdModel
  ){}

  async execute(id: string): Promise<Frame | null> {
    const frame = await this.model.getById(id);

    return frame;
  }
}