"use strict";
// model é a camada mais proxima do banco de dados
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// importar a interface Book. Ela continuará definindo o tipo de retorno esperado nas nossas requisições.
// No TypeScript , as classes são uma maneira de definir a forma de um objeto, podemos considerar uma classe como PROJETO PARA CRIAÇÃO DE OBJETOS
class BookModel {
    constructor(connection) {
        this.connection = connection;
    }
    // getAll
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM books');
            const [rows] = result;
            return rows;
        });
    }
    //create book
    create(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, price, author, isbn } = book;
            const result = yield this.connection.execute('INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)', [title, price, author, isbn]);
            const [dataInserted] = result;
            const { insertId } = dataInserted;
            return Object.assign({ id: insertId }, book);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM books WHERE id=?', [id]);
            const [rows] = result;
            const [book] = rows;
            return book;
        });
    }
}
exports.default = BookModel;
