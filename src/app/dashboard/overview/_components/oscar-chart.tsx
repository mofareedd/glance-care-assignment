"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  nominations: {
    label: "Nominations",
    color: "hsl(var(--chart-1))",
  },
  wins: {
    label: "Wins",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface IOscarChart {
  chartData: { genre: string; nominations: number; wins: number }[];
}

export function OscarChart({ chartData }: IOscarChart) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Oscar Statistics by Genre</CardTitle>
        <CardDescription>
          Showing total nominations and wins by genre
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[310px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="genre"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="wins"
              type="natural"
              fill="var(--color-wins)"
              fillOpacity={0.4}
              stroke="var(--color-wins)"
              stackId="a"
            />
            <Area
              dataKey="nominations"
              type="natural"
              fill="var(--color-nominations)"
              fillOpacity={0.4}
              stroke="var(--color-nominations)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="flex items-center gap-2 leading-none text-muted-foreground">
            Statistics based on genre-specific nominations and wins
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
