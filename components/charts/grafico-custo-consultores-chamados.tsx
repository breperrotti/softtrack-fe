"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2024-04-23", chamados: 138, consultores: 230 },
  { date: "2024-04-24", chamados: 387, consultores: 290 },
  { date: "2024-04-25", chamados: 215, consultores: 250 },
  { date: "2024-04-26", chamados: 75, consultores: 130 },
  { date: "2024-04-27", chamados: 383, consultores: 420 },
  { date: "2024-04-28", chamados: 122, consultores: 180 },
  { date: "2024-04-29", chamados: 315, consultores: 240 },
  { date: "2024-04-30", chamados: 454, consultores: 380 },
  { date: "2024-05-01", chamados: 165, consultores: 220 },
  { date: "2024-05-02", chamados: 293, consultores: 310 },
  { date: "2024-05-03", chamados: 247, consultores: 190 },
  { date: "2024-05-04", chamados: 385, consultores: 420 },
  { date: "2024-05-05", chamados: 481, consultores: 390 },
  { date: "2024-05-06", chamados: 498, consultores: 520 },
  { date: "2024-05-07", chamados: 388, consultores: 300 },
  { date: "2024-05-08", chamados: 149, consultores: 210 },
  { date: "2024-05-09", chamados: 227, consultores: 180 },
  { date: "2024-05-10", chamados: 293, consultores: 330 },
  { date: "2024-05-11", chamados: 335, consultores: 270 },
  { date: "2024-05-12", chamados: 197, consultores: 240 },
  { date: "2024-05-13", chamados: 197, consultores: 160 },
  { date: "2024-05-14", chamados: 448, consultores: 490 },
  { date: "2024-05-15", chamados: 473, consultores: 380 },
  { date: "2024-05-16", chamados: 338, consultores: 400 },
  { date: "2024-05-17", chamados: 499, consultores: 420 },
  { date: "2024-05-18", chamados: 315, consultores: 350 },
  { date: "2024-05-19", chamados: 235, consultores: 180 },
  { date: "2024-05-20", chamados: 177, consultores: 230 },
  { date: "2024-05-21", chamados: 82, consultores: 140 },
  { date: "2024-05-22", chamados: 81, consultores: 120 },
  { date: "2024-05-23", chamados: 252, consultores: 290 },
  { date: "2024-05-24", chamados: 294, consultores: 220 },
  { date: "2024-05-25", chamados: 201, consultores: 250 },
  { date: "2024-05-26", chamados: 213, consultores: 170 },
  { date: "2024-05-27", chamados: 420, consultores: 460 },
  { date: "2024-05-28", chamados: 233, consultores: 190 },
  { date: "2024-05-29", chamados: 78, consultores: 130 },
  { date: "2024-05-30", chamados: 340, consultores: 280 },
  { date: "2024-05-31", chamados: 178, consultores: 230 },
  { date: "2024-06-01", chamados: 178, consultores: 200 },
  { date: "2024-06-02", chamados: 470, consultores: 410 },
  { date: "2024-06-03", chamados: 103, consultores: 160 },
  { date: "2024-06-04", chamados: 439, consultores: 380 },
  { date: "2024-06-05", chamados: 88, consultores: 140 },
  { date: "2024-06-06", chamados: 294, consultores: 250 },
  { date: "2024-06-07", chamados: 323, consultores: 370 },
  { date: "2024-06-08", chamados: 385, consultores: 320 },
  { date: "2024-06-09", chamados: 438, consultores: 480 },
  { date: "2024-06-10", chamados: 155, consultores: 200 },
  { date: "2024-06-11", chamados: 92, consultores: 150 },
  { date: "2024-06-12", chamados: 492, consultores: 420 },
  { date: "2024-06-13", chamados: 81, consultores: 130 },
  { date: "2024-06-14", chamados: 426, consultores: 380 },
  { date: "2024-06-15", chamados: 307, consultores: 350 },
  { date: "2024-06-16", chamados: 371, consultores: 310 },
  { date: "2024-06-17", chamados: 475, consultores: 520 },
  { date: "2024-06-18", chamados: 107, consultores: 170 },
  { date: "2024-06-19", chamados: 341, consultores: 290 },
  { date: "2024-06-20", chamados: 408, consultores: 450 },
  { date: "2024-06-21", chamados: 169, consultores: 210 },
  { date: "2024-06-22", chamados: 317, consultores: 270 },
  { date: "2024-06-23", chamados: 480, consultores: 530 },
  { date: "2024-06-24", chamados: 132, consultores: 180 },
  { date: "2024-06-25", chamados: 141, consultores: 190 },
  { date: "2024-06-26", chamados: 434, consultores: 380 },
  { date: "2024-06-27", chamados: 448, consultores: 490 },
  { date: "2024-06-28", chamados: 149, consultores: 200 },
  { date: "2024-06-29", chamados: 103, consultores: 160 },
  { date: "2024-06-30", chamados: 446, consultores: 400 },
]

const chartConfig = {
  chamados: {
    label: "Chamados",
    color: "#CECDEE",
  },
  consultores: {
    label: "Consultores",
    color: "#5F5DF1",
  },
} satisfies ChartConfig;

const tickFormatter = (value: string) => {
  const date = new Date(value);
  return date.toLocaleDateString("pt-br", {
    month: "short",
    day: "numeric",
  });
};

const labelFormatter = (value: string) => {
  return new Date(value).toLocaleDateString("pt-br", {
    month: "short",
    day: "numeric",
  });
};

const MemoizedCardHeader = () => (
  <CardHeader className="flex flex-col items-center gap-2 space-y-0 border-b py-5">
    <div className="grid gap-1 text-center">
      <CardTitle>Controle de Custos Consultores x Chamados</CardTitle>
      <CardDescription>Agosto - 2024</CardDescription>
    </div>
  </CardHeader>
);

export function GraficoCustoConsultoresChamados() {
  return (
    <Card className="border-none shadow-none h-full w-full bg-white">
      <MemoizedCardHeader />
      <CardContent className="pt-4">
        <ChartContainer config={chartConfig} className="w-full h-[450px] aspect-square">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillchamados" x1="1" y1="1" x2="1" y2="1">
                <stop offset="5%" stopColor="var(--color-chamados)" stopOpacity={1} />
                <stop offset="70%" stopColor="var(--color-chamados)" stopOpacity={1} />
              </linearGradient>
              <linearGradient id="fillconsultores" x1="1" y1="1" x2="1" y2="1">
                <stop offset="5%" stopColor="var(--color-consultores)" stopOpacity={1} />
                <stop offset="70%" stopColor="var(--color-consultores)" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={tickFormatter}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent labelFormatter={labelFormatter} indicator="dot" />}
            />
            <Area dataKey="consultores" type="natural" fill="url(#fillconsultores)" stroke="var(--color-consultores)" stackId="a" />
            <Area dataKey="chamados" type="natural" fill="url(#fillchamados)" stroke="var(--color-chamados)" stackId="a" />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

GraficoCustoConsultoresChamados.displayName = "GraficoCustoConsultoresChamados"