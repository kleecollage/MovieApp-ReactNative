import { Movie } from "../../core/entities/movie.entity";
import type { Result } from "../interfaces/movie-db.responses";

export class MovieMapper {
  static fromMovieDBResultToEntity( result: Result ): Movie {
    // new Movie // en caso de que ovie fuera una clase
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    }
  }
}