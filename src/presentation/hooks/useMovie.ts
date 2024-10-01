import { useEffect, useState } from 'react'
import { FullMovie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from '../../config/adapters/http/movieDB.adapter';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = ( movieId: number ) => {
  
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState<FullMovie | null>(null)
  const [cast, setCast] = useState<Cast[]>()

  useEffect(() => {
    loadMovie();
  }, [movieId]);
  
  
  const loadMovie = async() => {
    const fullMoviePromise = UseCases.getMovieByIdUseCase(movieDBFetcher, movieId)
    const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId)
    
    const [fullMovie, cast] = await Promise.all([fullMoviePromise, castPromise])

    setMovie(fullMovie);
    setCast(cast)
    setIsLoading(false);
    // console.log(cast);
  }

  return {
    // properties
    isLoading,
    movie,
    cast,
    //methods
    loadMovie,
  }
}
