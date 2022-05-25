import Frame, { frameZodSchema } from '../Interfaces/Frame';
import Service, { ServiceError } from '.';
import FrameModel from '../Models/Frame';

class FrameService extends Service<Frame> {
  constructor(model = new FrameModel()) {
    super(model);
  }

  create = async (obj: Frame): Promise<Frame | ServiceError | null> => {
    const parsed = frameZodSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };

  update = async (id: string, frame: Frame): 
  Promise<Frame | ServiceError | null> => {
    const validated = frameZodSchema.safeParse(frame);

    if (!validated.success) {
      return { error: validated.error };
    }

    return this.model.update(id, frame);
  };
}

export default FrameService;