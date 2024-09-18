"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const COLORS = ['#8884d8', '#e0e0e0'] 

const chartData = [
  { name: 'Escopo Alcançado', value: 75 },
  { name: 'Desvio', value: 25 },
]

export function GraficoDesvioEscopo() {
  return (
    <Card className="border-none shadow-none flex flex-col items-center">
      <CardHeader className="flex flex-col items-center">
        <CardTitle>Desvio de Escopo</CardTitle>
        <CardDescription>Agosto - 2024</CardDescription>
      </CardHeader>
      <CardContent className="mt-6 flex justify-center relative">
        <ResponsiveContainer width={220} height={220}> 
          <PieChart>
            <Pie
              data={chartData}
              innerRadius={80}
              outerRadius={90}
              paddingAngle={5}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div 
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          style={{ transform: 'translateY(-5%)' }} 
        >
          <span className="text-4xl font-bold">75%</span>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm mt-4">
        <div className="text-center font-medium">Escopo Alcançado</div>
      </CardFooter>
    </Card>
  )
}
