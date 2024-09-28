import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { TopRatedResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

export const moviesTopRatedUseCase = async(fetcher: HttpAdapter) => {
  try {
    const topRated = await fetcher.get<TopRatedResponse>('/top_rated');
    return topRated.results.map(result=>MovieMapper.fromMovieDBResultToEntity(result))
  } catch (error) {
    console.log(error)
    throw new Error('Error fetching movies -TopRated',)
  }
}