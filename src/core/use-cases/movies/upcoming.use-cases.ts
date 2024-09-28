import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse, UpcomingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

export const moviesUpcomingUseCase = async(fetcher: HttpAdapter) => {
  try {
    const upcoming = await fetcher.get<UpcomingResponse>('/upcoming');
    return upcoming.results.map(result=>MovieMapper.fromMovieDBResultToEntity(result))
  } catch (error) {
    console.log(error)
    throw new Error('Error fetching movies -Upcoming',)
  }
}