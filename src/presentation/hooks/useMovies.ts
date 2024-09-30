import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"
import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from "../../config/adapters/http/movieDB.adapter";

let popularPageNumber = 1;

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
    const nowPlayingPromise = UseCases.moviesNowPLayingUseCase(movieDBFetcher);
    // console.log(nowPlayingMovies[0])
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
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
  }

  return {
    // properties
    isLoading,
    nowPlaying,
    upcoming,
    topRated,
    popular,
    // methods
    popularNextPage: async() => {
      popularPageNumber++;
      const popularMovies = await UseCases.moviesPopularUseCase( movieDBFetcher, {
        page: popularPageNumber,
      });
      setPopular( prev => [...prev, ...popularMovies] );
    },
  }
  
}
