export interface NowPlayingResponse {
  dates:         Dates;
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}

export interface TopRatedResponse {
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}

export interface PopularResponse {
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}

export interface UpcomingResponse {
  dates:         Dates;
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export interface Result {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: string; //OriginalLanguage
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export enum OriginalLanguage {
  En = "en",
  Ko = "ko",
  Pt = "pt",
  CN = "cn",
  Fr = "fr",
  Zh = "zh",
}

