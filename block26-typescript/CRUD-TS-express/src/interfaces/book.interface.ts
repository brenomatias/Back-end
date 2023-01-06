// interface para representar um livro no nosso sistema, ela irá possuir as seguintes propriedades:
interface Book {
    id?: number;
    title: string;
    price: number;
    author: string;
    isbn: string;
}

export default Book;