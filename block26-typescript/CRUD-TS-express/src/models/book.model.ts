// model é a camada mais proxima do banco de dados

import { Pool, ResultSetHeader } from 'mysql2/promise';

import Book from '../interfaces/book.interface';
// importar a interface Book. Ela continuará definindo o tipo de retorno esperado nas nossas requisições.


// No TypeScript , as classes são uma maneira de definir a forma de um objeto, podemos considerar uma classe como PROJETO PARA CRIAÇÃO DE OBJETOS
export default class BookModel {
    public connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    // getAll
    public async getAll(): Promise<Book[]> {
        const result = await this.connection
          .execute('SELECT * FROM books');

          const [rows] = result;
        
    return rows as Book[];
    }

    //create book
    public async create(book: Book): Promise<Book> {
        const { title, price, author, isbn } = book;

        const result = await this.connection.execute<ResultSetHeader>(
            'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)', [title, price, author, isbn],
        );
        
        const [dataInserted] = result;
        const { insertId } = dataInserted;
        return { id: insertId, ...book };
    }

    public async getById(id: number): Promise<Book> {
        const result = await this.connection
          .execute('SELECT * FROM books WHERE id=?', [id]);
        const [rows] = result;
        const [book] = rows as Book[];
        return book;
      }

      public async update(id: number, book: Book) {
        const { title, price, author, isbn } = book;
        await this.connection.execute(
          'UPDATE books SET title=?, price=?, author=?, isbn=? WHERE id=?',
          [title, price, author, isbn, id]
        );
      }

      public async remove(id: number) {
        await this.connection.execute(
          'DELETE FROM books WHERE id=?',
          [id],
        );
      }

}
