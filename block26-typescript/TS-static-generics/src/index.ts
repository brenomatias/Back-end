import express, { Express, Request, Response, RequestHandler } from 'express';
import connection from './connection';
import { Student, StudentModelMySQL2 } from './student';
// StudentModelMySQL2 = classe que descreve o objto student

const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response, next: Function): Response => {
    return res.status(200).send( { message: 'ok'});
});

app.get('/students', async (req: Request, res: Response, next: Function): Promise<Response> => {

    const studentModel = new StudentModelMySQL2(connection);
    // usamos a palavra reservada new para criar uma instância da Classe 
    // StudentModelMySQL2  

    // An instance is an object containing data and behavior described by the class

    const students = await studentModel.getStudents();
    // ação que é permitida e descrita na classe

    return res.status(200).send({ students});
});

app.post('/students', async (req: Request, res: Response, next: Function): Promise<Response> => {
    const { age, module, name } = req.body;

    if(typeof age !== 'number') {
        return res.status(400).end();
    }

    if(typeof module !== 'number') {
        return res.status(400).end();
    }

    if(typeof name !== 'string') {
        return res.status(400).end();
    }

    const student: Student = {
        age,
        module,
        name
    }

    const studentModel = new StudentModelMySQL2(connection);

    await studentModel.addStudent(student);

    return res.status(201).end();

});

app.listen(3000, () => console.log(`returning typescript server on port 3000`));


// qualquer coisa exclui a pasta dist