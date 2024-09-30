import { useEffect, useState } from 'react'
import { FullMovie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from '../../config/adapters/http/movieDB.adapter';

export const useMovie = ( movieId: number ) => {
  
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState<FullMovie>()

  useEffect(() => {
    loadMovie();
  }, [movieId]);
  
  
  const loadMovie = async() => {
    const fullMovie = await UseCases.getMovieByIdUseCase(movieDBFetcher, movieId)
    setMovie(fullMovie);
    // console.log(fullMovie);
    setIsLoading(false);
  }

  return {
    // properties
    isLoading,
    movie,
    //methods
    loadMovie,
  }
}
