import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

export const moviesPopularUseCase = async(fetcher: HttpAdapter) => {
  try {
    const pupular = await fetcher.get<PopularResponse>('/popular');
    return pupular.results.map(result=>MovieMapper.fromMovieDBResultToEntity(result))
  } catch (error) {
    console.log(error)
    throw new Error('Error fetching movies -pupular',)
  }
}