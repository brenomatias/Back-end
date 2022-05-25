import { z } from 'zod';
//  Zod is a TypeScript-first schema declaration and validation library
// validação de schemas
// 'irmão do joi' -> validação de formatos

const frameZodSchema = z.object({ // define como os dados devem ser recebidos
  material: z.string(),
  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'Color must be 3 or more characters long' }),
});

type Frame = z.infer<typeof frameZodSchema>; // 'z.infer' -> infere o tipo do schema
// como se fosse usar uma interface para validação

export default Frame;

export { frameZodSchema }; // utilizado PARA UTILIZAR NA VALIDAÇÃO DO ESQUEMA 
// NAS OUTRAS CAMADAS

// 'z.infer' -> garante tipo que fez e o tipo que esta sendo validado