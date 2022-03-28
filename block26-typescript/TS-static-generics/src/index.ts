// ./index.ts

import express from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';


const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req, res) => {
    res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});