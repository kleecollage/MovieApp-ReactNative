import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"
import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from "../../config/adapters/http/movieDB.adapter";


export const useMovies = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  
  useEffect(() => {
    initialLoad();
  }, [])
  
  const initialLoad = async() => {
    const nowPlayingMovies =  await UseCases.moviesNowPLayingUseCase(movieDBFetcher);
    // console.log(nowPlayingMovies[0])
  }

  return {
    // properties
    isLoading,
    nowPlaying,
  }
  
}
