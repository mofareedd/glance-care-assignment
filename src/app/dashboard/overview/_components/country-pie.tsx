"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart, Sector } from "recharts";
import type { PieSectorDataItem } from "recharts/types/polar/Pie";

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

const chartConfig: ChartConfig = {
  visitors: {
    label: "Visitors",
  },
  usa: {
    label: "USA",
    color: "hsl(var(--chart-1))",
  },
  uk: {
    label: "UK",
    color: "hsl(var(--chart-2))",
  },
  japan: {
    label: "Japan",
    color: "hsl(var(--chart-3))",
  },
  new: {
    label: "New Zealand",
    color: "hsl(var(--chart-4))",
  },
  australia: {
    label: "Australia",
    color: "hsl(var(--chart-5))",
  },
};

interface CountryChartProps {
  countryData: {
    country: string;
    count: number;
    fill: string;
  }[];
}

export function CountryPieChart({ countryData }: CountryChartProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Countries</CardTitle>
        <CardDescription>Most Frequent Countries in Movies</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          //   className="mx-auto aspect-square max-h-[250px]"
          className="mx-auto aspect-square h-[310px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={countryData}
              dataKey="count"
              nameKey="country"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            >
              <LabelList
                dataKey="country"
                fontSize={12}
                className="fill-background"
                stroke="none"
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Most featured countries in movies <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing the frequency of countries in movies
        </div>
      </CardFooter>
    </Card>
  );
}
