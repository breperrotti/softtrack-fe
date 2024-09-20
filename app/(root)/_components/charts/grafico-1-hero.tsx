"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Jan", abertos: 186, resolvidos: 150 },
  { month: "Fev", abertos: 305, resolvidos: 200 },
  { month: "Mar", abertos: 237, resolvidos: 120 },
  { month: "Abril", abertos: 73, resolvidos: 190 },
  { month: "Maio", abertos: 209, resolvidos: 130 },
  { month: "Junho", abertos: 214, resolvidos: 140 },
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

export function Grafico1Hero() {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="-mb-28">
        <CardHeader className="font-bold text-xl text-center">Abertos x Resolvidos</CardHeader>
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
    </Card>
  )
}
