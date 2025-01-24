import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Movie } from "@/lib/types";
import { Star, Trophy } from "lucide-react";
import React from "react";

interface ILeaderBoardCard {
  movie: Movie;
  index: number;
}
export default function LeaderBoardCard({ movie, index }: ILeaderBoardCard) {
  return (
    <Card>
      <CardHeader className="">
        <div className="flex items-center justify-between">
          <CardTitle>{movie.title}</CardTitle>
          <Trophy
            className={`w-6 h-6 ${
              index === 0
                ? "text-yellow-500"
                : index === 1
                  ? "text-gray-400"
                  : "text-amber-600"
            }`}
          />
        </div>
        <CardDescription>It was released in {movie.year}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex items-center gap-2">
        This movie has received a rating of
        <span className="font-bold">{movie.imdb_rating.toFixed(1)}/10</span>
        <Star className="w-4 h-4 fill-yellow-600" stroke="0" />
      </CardContent>
    </Card>
  );
}
