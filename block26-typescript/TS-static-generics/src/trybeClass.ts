import { Module, Student } from "./student";

type TrybeClass = { 
  name: string, 
  students: Student[],
  module: Module | null
};
// Type Unions

// interface TrybeClass {
//   name: string, students: Student[]
// }

let trybeClass: TrybeClass = {
  name: 'Turma 15 - Tribo A',
  students: [],
  module: 2,
};

// [state, setState] = useState()

type StudentProjectGrade = [Student, string, number];

let studentOneGrade: StudentProjectGrade = [
  { age: 20, module: 2, name: 'Luiz Grosz' },
  'Trybesmith',
  100
]