import { z } from 'zod';

const lensZodSchema = z.object({
  degree: z.number(),
  antiGlare: z.boolean(),
  blueLightFilter: z.boolean(),
});

type Lens = z.infer<typeof lensZodSchema>;

export default Lens;
export { lensZodSchema };