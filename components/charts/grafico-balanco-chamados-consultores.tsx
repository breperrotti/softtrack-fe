"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "T.I", chamados: 186, consultores: 150 },
  { month: "Vendas", chamados: 305, consultores: 200 },
  { month: "Suporte", chamados: 237, consultores: 120 },
  { month: "Outros", chamados: 73, consultores: 190 },
  { month: "Infra", chamados: 209, consultores: 130 },
  { month: "R.H", chamados: 214, consultores: 140 },
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
} satisfies ChartConfig

export function GraficoBalançoChamadosConsultoresSegmento() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-center">Balanço Chamados x Consultores por Segmento</CardTitle>
        <CardDescription>
          Agosto - 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-h-[250px]"
        >
          <RadarChart
            data={chartData}
            margin={{
              top: -40,
              bottom: -10,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="chamados"
              fill="var(--color-chamados)"
              fillOpacity={0.6}
            />
            <Radar dataKey="consultores" fill="var(--color-consultores)" />
            <ChartLegend className="mt-8" content={<ChartLegendContent />} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 pt-4 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Distribuição 11.2% mais acertiva <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Porcentagem baseada nos últimos 3 meses
        </div>
      </CardFooter>
    </Card>
  )
}
