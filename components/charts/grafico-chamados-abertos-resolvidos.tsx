"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "T.I", abertos: 186, resolvidos: 150 },
  { month: "Vendas", abertos: 305, resolvidos: 200 },
  { month: "Suporte", abertos: 237, resolvidos: 120 },
  { month: "Outros", abertos: 73, resolvidos: 190 },
  { month: "Infra", abertos: 209, resolvidos: 130 },
  { month: "R.H", abertos: 214, resolvidos: 140 },
]

const chartConfig = {
  abertos: {
    label: "Abertos",
    color: "#CECDEE",
  },
  resolvidos: {
    label: "Resolvidos",
    color: "#5F5DF1",
  },
} satisfies ChartConfig

export function GraficoChsmadosAbertosResolvidosSegmento() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Número de abertos Abertos x Resolvidos por segmento</CardTitle>
        <CardDescription>Agosto - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="abertos" fill="#CECDEE" radius={4} />
            <Bar dataKey="resolvidos" fill="#5F5DF1" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
