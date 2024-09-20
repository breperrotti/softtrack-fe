"use client"

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { demandas } from "@/mocks/contracts";
import { filtrarDemandasPorRework } from "../actions/rework";

const COLORS = ["#4F46E5", "#34D399", "#FBBF24"];

const reworkData = filtrarDemandasPorRework(demandas);

export function GraficoReworkPorComplexidade() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(undefined);
  };

  const totalRework = reworkData.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <Card className="border-none shadow-none h-full w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Retrabalho por Complexidade</CardTitle>
        <CardDescription>Ano de 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative flex justify-center items-center">
          <div className="absolute flex flex-col items-center justify-center">
            <p className="text-5xl font-bold text-black">{totalRework.toFixed(1)}</p>
            <p className="text-base text-gray-500">Horas</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={reworkData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                activeIndex={activeIndex}
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                paddingAngle={5}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`} // Exibe a porcentagem no rótulo
              >
                {reworkData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    cursor="pointer"
                  />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length && typeof payload[0].value === 'number') {
                    return (
                      <div className="bg-white p-2 rounded shadow-lg">
                        <p className="label font-medium">{`${payload[0].name}: ${payload[0].value.toFixed(2)}h`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-4 text-sm mt-4">
        {reworkData.map((entry, index) => (
          <div key={index} className="flex items-center gap-1">
            <div
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
              className="h-3 w-3 rounded-full"
            ></div>
            <span className="text-gray-700 font-medium">{entry.name}</span>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
}
