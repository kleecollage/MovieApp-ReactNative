import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"
import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from "../../config/adapters/http/movieDB.adapter";


export const useMovies = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([])
  const [popular, setPopular] = useState<Movie[]>([])
  
  useEffect(() => {
    initialLoad();
  }, [])
  
  const initialLoad = async() => {
    const nowPlayingPromise =  await UseCases.moviesNowPLayingUseCase(movieDBFetcher);
    // console.log(nowPlayingMovies[0])
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);
    const topRatedPromise = UseCases.moviesPopularUseCase(movieDBFetcher);
    const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);

    const [
      nowPayingMovie,
      upComingMovies,
      topRatedMovies,
      popularMovies,
    ] = await Promise.all([
      nowPlayingPromise,
      upcomingPromise,
      topRatedPromise,
      popularPromise
    ]);

    setNowPlaying(nowPayingMovie);
    setUpcoming(upComingMovies);
    setTopRated(topRatedMovies);
    setPopular(popularMovies);
    
    setIsLoading(false);

    console.log({
      nowPayingMovie,
      upComingMovies,
      topRatedMovies,
      popularMovies,
    })
  }

  return {
    // properties
    isLoading,
    nowPlaying,
    upcoming,
    topRated,
    popular
    // methods
  }
  
}
