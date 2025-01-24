import { MOVIES_MOCKS } from "./constants";
import type { Movie } from "./types";

const uniqueMovies = (movies: Movie[]): Movie[] =>
  Array.from(new Map(movies.map((movie) => [movie.title, movie])).values());

export async function getMovies(): Promise<Movie[]> {
  const res = await fetch("https://www.jsondataai.com/api/guK8Sdo");

  if (!res.ok) {
    return Promise.resolve(uniqueMovies(MOVIES_MOCKS));
  }
  const data: Movie[] = await res.json();
  return uniqueMovies(data);
}
