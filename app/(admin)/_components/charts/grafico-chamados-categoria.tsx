import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ChartTooltip, ChartTooltipContent, ChartContainer, ChartConfig } from "@/components/ui/chart";

const dataCriticidade = [
    { categoria: "Baixa", percentual: 35, quantidade: 70 },
    { categoria: "Média", percentual: 40, quantidade: 80 },
    { categoria: "Alta", percentual: 25, quantidade: 50 },
];

const dataComplexidade = [
    { categoria: "N1", percentual: 30, quantidade: 60 },
    { categoria: "N2", percentual: 50, quantidade: 100 },
    { categoria: "N3", percentual: 20, quantidade: 40 },
];

const chartConfig = {
    N1: {
        label: "N1",
        color: "#CECDEE",
    },
    N2: {
        label: "N2",
        color: "#5F5DF1",
    },
    N3: {
        label: "N3",
        color: "#5F5DF1",
    },
} satisfies ChartConfig;

export function GraficoChamadosPorCategoria({ nome, subtitle }: { nome: string; subtitle: string }) {
    const [selectedFilter, setSelectedFilter] = useState("criticidade");

    const data = selectedFilter === "criticidade" ? dataCriticidade : dataComplexidade;

    return (
        <Card className="border-none drop-shadow-md flex flex-col items-center w-full">
            <CardHeader className="flex flex-col items-center">
                <CardTitle className={"text-center"}>{nome}</CardTitle>
                <CardDescription>{subtitle}</CardDescription>
            </CardHeader>

            {/* Seletor de visualização */}
            <div className="flex items-center gap-2 mb-4 px-6 w-full justify-center">
                <Tabs defaultValue={"criticidade"}>
                    <TabsList aria-label="Select filter">
                        <TabsTrigger
                            value="criticidade"
                            onClick={() => setSelectedFilter("criticidade")}
                        >
                            Criticidade
                        </TabsTrigger>
                        <TabsTrigger
                            value="complexidade"
                            onClick={() => setSelectedFilter("complexidade")}
                        >
                            Complexidade
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            <CardContent className="mt-6 w-full">
                <ResponsiveContainer width="100%" height={200}>
                    <ChartContainer config={chartConfig}>
                        <BarChart layout="vertical" data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" domain={[0, 80]} />
                            <YAxis type="category" dataKey="categoria" />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="line" />}
                            />
                            <Bar dataKey="percentual" fill="#5623E2" barSize={30} radius={[0, 5, 5, 0]} />
                        </BarChart>
                    </ChartContainer>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
