"use client";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Movie } from "@/lib/types";
import { Award, Calendar, Star } from "lucide-react";

interface IMoviesCard {
  movie: Movie;
}

export function MovieCard({ movie }: IMoviesCard) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden cursor-pointer">
          <CardHeader className="">
            <CardTitle className="text-xl">{movie.title}</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-8">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                {movie.genre.map((g, idx) => (
                  <Badge variant={"secondary"} key={idx}>
                    {g}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="font-semibold">
                  {movie.imdb_rating.toFixed(1)}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                <span className="text-sm text-gray-600">{movie.year}</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1 text-yellow-500" />
                <span className="text-sm text-gray-600">
                  {movie.oscar_winning} Oscar
                  {movie.oscar_winning !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[400px] overflow-x-hidden overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{movie.title}</DialogTitle>
          <div className="flex justify-between items-center mt-2 text-xs">
            <div className="flex items-center flex-wrap gap-2">
              {movie.genre.map((g) => (
                <Badge key={g} variant="secondary">
                  {g}
                </Badge>
              ))}
            </div>
            <div className="flex items-center">
              <Star className="w-3 h-3 text-yellow-400 mr-1" />
              <span className="font-semibold">
                {movie.imdb_rating.toFixed(1)}
              </span>
            </div>
          </div>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>{movie.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4 text-yellow-500" />
              <span>
                {movie.oscar_winning} Oscar
                {movie.oscar_winning !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
          <div className="my-4 space-y-2">
            <p className="text-sm font-semibold">Actors: </p>
            <div className="flex items-center space-x-4 flex-wrap">
              {movie.cast.map((c, index) => {
                return (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{c[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs">{c}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {movie.oscar_winning_list.length > 0 && (
            <div>
              <h4 className="font-semibold mb-1">Oscar Wins</h4>
              <div className="flex items-center gap-2 flex-wrap">
                {movie.oscar_winning_list.map((win) => (
                  <Badge
                    key={win}
                    variant={"secondary"}
                    className="text-[11px]"
                  >
                    {win}
                  </Badge>
                ))}
              </div>
              {/* <ul className="list-disc list-inside">
                {movie.oscar_winning_list.map((win) => (
                  <li key={win}>{win}</li>
                ))}
              </ul> */}
            </div>
          )}
          {movie.oscar_nominations_list.length > 0 && (
            <div>
              <p className="font-semibold mb-1 text-sm">Oscar Nominations :</p>
              <div className="grid grid-cols-2 gap-3">
                {movie.oscar_nominations_list.map((nomination) => (
                  <Badge
                    key={nomination}
                    variant={"secondary"}
                    className="text-[11px]"
                  >
                    {nomination}
                  </Badge>
                ))}
              </div>
              {/* <ul className="list-disc list-inside">
                {movie.oscar_nominations_list.map((nomination) => (
                  <li key={nomination}>{nomination}</li>
                ))}
              </ul> */}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
