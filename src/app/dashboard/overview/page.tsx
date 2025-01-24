import PageContainer from "@/components/layout/page-container";
import { getMovies } from "@/lib/api";
import type { Movie } from "@/lib/types";
import type { Metadata } from "next";
import { CountryPieChart } from "./_components/country-pie";
import { LeaderBoard } from "./_components/leaderboard";
import { OscarChart } from "./_components/oscar-chart";
import { getCountryCounts, getGenreStats, getTopRatedMovies } from "./metrics";

export const metadata: Metadata = {
  title: "Dashboard: Overview",
};

export default async function Overview() {
  const movies: Movie[] = await getMovies();

  const countriesData = getCountryCounts(movies);
  const oscartStatisticsByGebre = getGenreStats(movies);
  const topRatedMovies = getTopRatedMovies(movies);
  return (
    <PageContainer>
      <div className="flex flex-1 flex-col space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-4">
            <OscarChart chartData={oscartStatisticsByGebre} />
          </div>
          <div className="col-span-4 md:col-span-3">
            <CountryPieChart countryData={countriesData} />
          </div>
        </div>
        <div className="">
          <LeaderBoard movies={topRatedMovies} />
        </div>
      </div>
    </PageContainer>
  );
}
