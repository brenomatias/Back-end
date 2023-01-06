import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';


const router = Router();

const booksController = new BooksController();
const booksSlashId = '/books/:id';


router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);
router.put(booksSlashId, validationBook, booksController.update);
router.delete(booksSlashId, booksController.remove);


export default router;