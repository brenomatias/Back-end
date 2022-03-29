// A camada de serviço fica responsável por fazer a interface com a camada de modelo.

import connection from '../models/connection';
import BookModel from '../models/book.model';
import BookInterface from '../interfaces/book.interface';


class BookService {
    public model: BookModel;
  
    constructor() {
      this.model = new BookModel(connection);
    }
  
    public async getAll(): Promise<BookInterface[]> {
      const books = await this.model.getAll();
      return books;
    }
  }
  
  export default BookService;


// service layer:
// set of available operations from the perspective of interfacing client layers. It encapsulates the application's business logic, controlling transactions and coor-dinating responses in the implementation of its operations.