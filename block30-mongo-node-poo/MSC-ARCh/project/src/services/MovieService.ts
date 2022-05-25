// src/Services/movie.ts

import MovieModel from "../models/MovieModel";
import { IMovie } from "../schemas/movies";

class MovieService {
  constructor(private movieModel = new MovieModel()) {}

  public async getMovies(): Promise<IMovie[]> {
    const movies = await this.movieModel.getAll();
    return movies;
  }

  public async getMovieByYear(
    year: string,
  ): Promise<IMovie[] | null> {
    const movies = await this.movieModel.getByYear(Number(year));
    return movies;
  }

  public async insertMovie(
    movieData: IMovie,
  ): Promise<IMovie | null> {
    const movie = await this.movieModel.create(movieData);
    return movie;
  }

  public async updateMovie(
    id: string,
    movieData: Partial<IMovie>,
  ): Promise<void> {
    await this
      .movieModel.updateById(id, movieData);
  }

  public async deleteMovie(id: string): Promise<void> {
    await this.movieModel.deleteById(id);
  }
}

export default MovieService;