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
// criação de um novo objeto com as props dos tipos(objetos) Person e TrybePerson



interface IStudentModel {
    addStudent: (student: Student ) => Promise<void>,
    // generics <>
    getStudents: () => Promise<Student[]>
    // generics <>
    // o tipo ou tipos que serão passados para o componente
};
// utilizada para declarar a forma de um objeto, nomear e parametrizar os tipos do objeto e compor tipos de objetos nomeados existentes em novos.
// "contrato de código", ou seja, aquilo que você espera que seja implementado


// CLASS = PROJETO PARA CRIAÇÃO DE OBJETO
// A classe StundentModelMySQL2 pode ser reutilizada para criar qualquer quantidade de novos objetos Student
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