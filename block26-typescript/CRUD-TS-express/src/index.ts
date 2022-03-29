import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import BooksRoutes from '../src/routes/books.routes';

const PORT = 8000;

const app: express.Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use(BooksRoutes); // coloque essa linha antes do middleware de erro!
