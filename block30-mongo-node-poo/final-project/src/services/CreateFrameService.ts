import { Frame, FrameColor, FrameMaterial } from "../entities/frame"
import { Service } from "./Service"
import { FrameServiceError, ServiceError } from "./ServiceError"

interface CreateFrameServiceParams {
  material: string,
  color: string
}

export interface CreateFrameModel {
  create(frame: Frame): Promise<{ id: string }>
}

export interface ICreateFrameService extends Service<CreateFrameServiceParams, { id: string }> {}

export class CreateFrameService implements ICreateFrameService {
  constructor(
    private model: CreateFrameModel
  ){}

  async execute(params: CreateFrameServiceParams): Promise<{ id: string }> {
    if(!(params.material in FrameMaterial)) {
      throw new ServiceError(FrameServiceError.INVALID_MATERIAL)
    }

    if(!(params.color in FrameColor)){
      throw new ServiceError(FrameServiceError.INVALID_COLOR)
    }

    const { id } =  await this.model.create({ 
      color: (params.color as unknown as FrameColor), 
      material: (params.material as unknown as FrameMaterial), 
    })

    return { id }
  }
}