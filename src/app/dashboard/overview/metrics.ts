import { MOVIES_MOCKS } from "@/lib/constants";
import type { Movie } from "@/lib/types";

export function getCountryCounts(movies: Movie[]) {
  const countryCounts: Record<string, number> = {};
  movies.forEach((movie) => {
    movie.country.forEach((country: string) => {
      countryCounts[country] = (countryCounts[country] || 0) + 1;
    });
  });

  return Object.entries(countryCounts).map(([country, count]) => ({
    country: country.toLowerCase().split(" ")[0],
    count,
    fill: `var(--color-${country.toLowerCase().split(" ")[0]})`, // Dynamic fill color based on country (lowercase)
    // fill: "var(--color-chrome)",
  }));
}

export const getTopRatedMovies = (movies: Movie[]): Movie[] => {
  return movies
    .sort((a, b) => b.imdb_rating - a.imdb_rating) // Sort by imdb_rating in descending order
    .slice(0, 10); // Get the top 3 movies
};

export const getGenreStats = (movies: Movie[]) => {
  // Aggregate data for the area chart
  const genreStats = movies.reduce(
    (acc, movie) => {
      movie.genre.forEach((genre) => {
        if (!acc[genre]) {
          acc[genre] = { genre, nominations: 0, wins: 0 };
        }
        acc[genre].nominations += movie.oscar_nominations;
        acc[genre].wins += movie.oscar_winning;
      });
      return acc;
    },
    {} as Record<string, { genre: string; nominations: number; wins: number }>,
  );

  return Object.values(genreStats);
};
