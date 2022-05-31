import { Request, Response } from "express";
import { ICreateFrameService } from "../services/CreateFrameService";
import { IGetAllFramesService } from "../services/GetAllFramesService";
import { IGetFrameByIdService } from "../services/GetFrameByIdService";
import { z, ZodError } from 'zod';
import { FrameServiceError, ServiceError } from "../services/ServiceError";

export class FrameController {
  private static readonly FRAME_ZOD_SCHEMA = z.object({
    material: z.string(),
    color: z.string(),
  })

  private static readonly SERVICE_ERROR_STATUS: Record<FrameServiceError, number> = {
    INVALID_COLOR: 422,
    INVALID_MATERIAL: 422
  }

  constructor(
    private getAllFramesService: IGetAllFramesService,
    private getFrameByIdService: IGetFrameByIdService,
    private createFrameService: ICreateFrameService
  ){}
  
  async getAll(_req: Request, res: Response){
    try {
      const frames = await this.getAllFramesService.execute();

      return res.json({ frames })
    } catch (err) {
      console.log(err);

      return res.status(500).end();
    }
  }

  async getById(req: Request, res: Response){
    try {
      const { id } = req.params;

      const frame = await this.getFrameByIdService.execute(id);

      if(!frame) return res.status(404).end();

      return res.json({ frame })
    } catch (err) {
      console.log(err);

      return res.status(500).end();
    }
  }
  
  async create(req: Request, res: Response){
    const { material, color } = req.body;

    try {
      const validated = FrameController.FRAME_ZOD_SCHEMA.parse({ material, color });

      const { id } = await this.createFrameService.execute(validated);

      return res.status(201).json({ id })
    } catch (err) {
      if(err instanceof ZodError){
        return res.status(400).end();
      }

      if(err instanceof ServiceError){
        const errorMessage = err.getMessage();

        return res.status(FrameController.SERVICE_ERROR_STATUS[errorMessage]).end();
      }

      console.log(err);

      return res.status(500).end();
    }
  }
}