import PageContainer from "@/components/layout/page-container";
import { getMovies } from "@/lib/api";
import type { Movie } from "@/lib/types";
import type { Metadata } from "next";
import { MovieList } from "./_components/movies-list";

export const metadata: Metadata = {
  title: "Dashboard: Browse",
};
export default async function Browse() {
  // const res = await fetch("https://www.jsondataai.com/api/guK8Sdo");
  // const movies: Movie[] = await res.json();
  const movies: Movie[] = await getMovies();

  return (
    <PageContainer>
      <MovieList movies={movies} />
    </PageContainer>
  );
}
