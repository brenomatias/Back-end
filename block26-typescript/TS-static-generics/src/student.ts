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

type TrybePerson = {
    module: Module,
}


export type Student = Person & TrybePerson;

interface IStudentModel {
    addStudent: (student: Student ) => Promise<void>,
    getStudents: () => Promise<Student[]>
};

export class StudentModelFake implements IStudentModel {
    students: Array<Student>

    constructor(students: Student[]){
      this.students = students
    }

    addStudent = async (student: Student): Promise<void> => {
        this.students.push(student);
      }
    
    getStudents = async (): Promise<Student[]> => this.students;   
}

export class StudentModelMySQL2 implements IStudentModel {
    connection: Pool

    constructor(connection: Pool){
        this.connection = connection;
    }

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