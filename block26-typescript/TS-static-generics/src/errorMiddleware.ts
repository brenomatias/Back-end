import express from 'express';
import { StatusCodes } from 'http-status-codes';
import  { Request, Response, NextFunction } from 'express';


const app = express();

app.use(express.json());

app.use((err: Error , req: Request, res: Response, next: NextFunction) => {
    const { name, message, details } = err as any;
    console.log(`name: ${name}`);
  
    switch(name) {
      case 'ValidationError':
        res.status(400).json({ message: details[0].message });
        break;
      case 'NotFoundError':
        res.status(404).json({ message });
        break;
      case 'ConflitError':
        res.status(409).json({ message });
        break;
      default:
        console.error(err);
        res.sendStatus(500);
    }
  
    next()
  });


// Sempre coloque ele após a declaração de outros middlewares, caso o contrário esse middleware não irá capturar os erros dos demais.
  