import { AxiosAdapter } from "./axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '6dfa64856a95807844610e8da6b0c05a',
    language: 'es'
  }
})