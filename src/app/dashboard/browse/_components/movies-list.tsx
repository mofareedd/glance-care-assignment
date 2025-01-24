"use client";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDebouncedCallback } from "@/hooks/use-debounced-callback";
import { GenresList } from "@/lib/constants";
import type { Movie } from "@/lib/types";
import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { MovieCard } from "./movie-card";

interface IMoviesList {
  movies: Movie[];
}
export function MovieList({ movies }: IMoviesList) {
  const [searchQuery, setSearchQuery] = useQueryState("search", {});
  const [genreQuery, setGenreQuery] = useQueryState("genre", {});
  const [data, setData] = useState(movies || []);

  const handleSearchChange = useDebouncedCallback((value: string) => {
    if (!value) {
      setSearchQuery(null);
      return;
    }
    setSearchQuery(value);
  }, 500);

  function searchMovie(value: string) {
    const resultMovies = movies.filter((m) =>
      m.title.toLowerCase().includes(value.toLowerCase()),
    );
    setData(resultMovies);
  }

  function filterMovies(searchValue: string, genreValue: string | null) {
    let newFilteredMovies = movies;

    if (searchValue) {
      newFilteredMovies = newFilteredMovies.filter((m) =>
        m.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
    }

    if (genreValue && genreValue !== "all") {
      newFilteredMovies = newFilteredMovies.filter((m) =>
        m.genre.includes(genreValue),
      );
    }

    setData(newFilteredMovies);
  }

  useEffect(() => {
    filterMovies(searchQuery || "", genreQuery || null);
  }, [searchQuery, genreQuery]);

  return (
    <div className="py-8 w-full">
      {/* <h1 className="text-3xl font-bold">Movie List</h1> */}
      <h1 className="text-xl">Browse</h1>
      <div className="flex flex-col md:flex-row items-start md:items-center space-x-8 my-4 space-y-4 md:space-y-0">
        <Input
          onChange={(e) => handleSearchChange(e.target.value)}
          className="bg-accent w-72"
          placeholder="Search a movie..."
        />
        <Select onValueChange={(v) => setGenreQuery(v === "all" ? null : v)}>
          <SelectTrigger className="max-w-60 bg-accent">
            <SelectValue placeholder="Select a genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* <SelectItem value="all">All</SelectItem> */}
              <SelectItem value="all">All</SelectItem>

              {GenresList.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <div className="flex w-full bg-red-50"> */}
        {data.map((movie, idx) => (
          <MovieCard key={idx} movie={movie} />
        ))}
      </div>
      {data.length < 1 ? (
        <h3 className="text-center py-10 text-xl text-muted-foreground">
          Not found
        </h3>
      ) : null}
    </div>
  );
}
