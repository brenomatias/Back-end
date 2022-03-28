import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';

export enum Module {
    FUNDAMENTOS,
    FRONTEND,
    BACKEND,
    CS,
};

type Person = {
    name: string,
    age: number,
}
// Type Aliases

type TrybePerson = {
    module: Module,
}
// Type Aliases

export type Student = Person & TrybePerson;



interface IStudentModel {
    addStudent: (student: Student ) => Promise<void>,
    getStudents: () => Promise<Student[]>
};



// CLASS = PROJETO PARA CRIAÇÃO DE OBJETO
export class StudentModelMySQL2 implements IStudentModel {

    connection: Pool

    constructor(connection: Pool){
        this.connection = connection;
        // usamos o this para acessar as propriedades da instância da classe
        // ele representa a própria instância que estamos criando
    }
// A constructor is a special function that creates and initializes an object instance of a class

// AÇÕES QUE O OBJETO PODE FAZER OU SOFRER
    addStudent = async (student: Student): Promise<void> => {
        const [{ insertId }] = await this.connection.execute
          <ResultSetHeader>
          ('INSERT INTO student (name, age, module) VALUES (?, ?, ?)'
        , [student.name, student.age, student.module]
        );
      }

      getStudents = async (): Promise<Student[]> => {
        const [result] = await this.connection.execute<RowDataPacket[]>('SELECT * from student');
        console.log(result)
        return result as Student[];
      } 
}

// In JavaScript, an object is a STANDALONE ENTITY, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics

// An instance is an object containing data and behavior described by the class. The new operator instantiates the class in JavaScript: instance = new Class() 