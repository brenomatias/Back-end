import { Router } from 'express';
import MovieController from './controllers/ModelController';

const movieController = new MovieController();

const router = Router();

const trybeflixByYear = '/trybeflix/:year';
const trybeflixById = '/trybeflix/:id'

router.get('/trybeflix', movieController.getMovies);
router.get(trybeflixByYear, movieController.getMovieByYear);
router.post('/', movieController.insertMovie);
router.put(trybeflixById, movieController.updateMovie);
router.delete(trybeflixById, movieController.deleteMovie);

export default router;