import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Movie } from "@/lib/types";
import React from "react";
import { getTopRatedMovies } from "../metrics";
import LeaderBoardCard from "./leaderboard-card";

interface ILeaderBoard {
  movies: Movie[];
}

export function LeaderBoard({ movies }: ILeaderBoard) {
  const topRatedMovies = getTopRatedMovies(movies);

  return (
    <section>
      <div className="py-4 space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Leaderboard 👑</h2>
        <p className="text-muted-foreground text-sm">Top 10 rated movies</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {topRatedMovies.slice(0, 3).map((m, index) => (
          <LeaderBoardCard key={index} movie={m} index={index} />
        ))}
      </div>

      <div className="py-8">
        <Table className="border rounded-lg overflow-hidden bg-card/40">
          <TableCaption>A list of top 10 rated movies.</TableCaption>
          <TableHeader className="bg-accent">
            <TableRow className="">
              <TableHead className="text-center pl-6">Rank</TableHead>
              <TableHead className="pl-6">Movie</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead className="text-center">Released Year</TableHead>
              <TableHead className="text-right pr-6">Actors</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border-2">
            {movies.slice(3).map((m, idx) => (
              <TableRow key={idx} className="">
                <TableCell className="text-center pl-6">{idx + 4}</TableCell>
                <TableCell className="text-left pl-6">{m.title}</TableCell>
                <TableCell className="text-left pl-6">
                  {m.imdb_rating}
                </TableCell>
                <TableCell className="space-x-4">
                  {m.genre.map((g, index) => (
                    <Badge key={index} variant={"secondary"}>
                      {g}
                    </Badge>
                  ))}
                </TableCell>
                <TableCell className="text-center">{m.year}</TableCell>
                <TableCell className="max-w-[300px] ml-auto  text-right flex gap-1 flex-wrap justify-end pr-6">
                  {m.cast.map((c, index) => {
                    const castName = index === m.cast.length - 1 ? c : `${c},`;
                    return <span key={index}>{castName}</span>;
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
