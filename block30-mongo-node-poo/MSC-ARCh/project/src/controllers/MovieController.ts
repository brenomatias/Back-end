// src/Controllers/movie.ts

import { Request, Response } from 'express';
import MovieService from '../services/MovieService';

class MovieController {
  constructor(private movieService = new MovieService()) {}
  
  private static readonly serverError = 'Ocorreu um erro interno.';
  private static readonly notFoundByYear = 'Not found any movie with this year'

  public getMovies = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    try {
      const movies = await this.movieService.getMovies();
      return res.status(200).send(movies);
    } catch (error) {
      return res.status(500).send({ message: MovieController.serverError});
    }
  };

  public getMovieByYear = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { year } = req.params;
    try {
      const movies = await this.movieService.getMovieByYear(year);

      if (movies?.length === 0) {
        return res
          .status(404)
          .send({ error: MovieController.notFoundByYear });
      }
  
      return res.status(200).send(movies);
    } catch (error) {
      return res.status(500).send(MovieController.serverError);
    }
  };

  public insertMovie = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { body: movieData } = req;
    try {
      const movie = await this.movieService.insertMovie(movieData);
      return res.status(201).send(movie);
    } catch ({ _message }) {
      if (_message === 'movies validation failed') {
        return res.status(400).send(_message);
      }
      return res.status(500).send(MovieController.serverError);
    }
  };

  public updateMovie = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { body: updateData, params: { id } } = req;
    try {
      const updatedMovie = await this
        .movieService.updateMovie(id, updateData);
      return res.status(200).send(updatedMovie);
    } catch (error) {
      console.log(error);
      return res.status(500).send(MovieController.serverError);
    }
  };

  public deleteMovie = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { id } = req.params;
    try {
      const deletedMovie = await this
        .movieService.deleteMovie(id);
      return res.status(200).send(deletedMovie);
    } catch (error) {
      console.log(error);
      return res.status(500).send(MovieController.serverError);
    }
  };
}

export default MovieController;