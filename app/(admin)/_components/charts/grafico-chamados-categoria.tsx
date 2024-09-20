"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
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

export function ChamadosPorCategoria({ nome, subtitle }: { nome: string; subtitle: string }) {
    const [selectedFilter, setSelectedFilter] = useState("criticidade");

    const data = selectedFilter === "criticidade" ? dataCriticidade : dataComplexidade;

    return (
        <Card className="border-none drop-shadow-md flex flex-col items-center w-full">
            <CardHeader className="flex flex-col items-center">
                <CardTitle>{nome}</CardTitle>
                <CardDescription>{subtitle}</CardDescription>
            </CardHeader>

            {/* Seletor de visualização */}
            <div className="flex items-center gap-2 mb-4 px-6 w-full justify-start">
                <span className="text-gray-500">Selecione:</span>

                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-[200px] justify-center border-2 border-black bg-white"
                        >
                            {selectedFilter === "criticidade"
                                ? "Criticidade"
                                : "Complexidade"}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 border-2 border-black min-w-[150px]" side="right" align="start">
                        <div className="p-2 bg-white rounded-md shadow-lg">
                            <ToggleGroup
                                type="single"
                                value={selectedFilter}
                                onValueChange={(value: string) => setSelectedFilter(value)}
                                className="flex flex-col gap-2"
                            >
                                <ToggleGroupItem
                                    value="criticidade"
                                    aria-label="Criticidade"
                                    className={`px-3 py-2 rounded-md text-center cursor-pointer transition-colors ${
                                        selectedFilter === "criticidade"
                                            ? "bg-indigo-500 text-white"
                                            : "bg-gray-200"
                                    }`}
                                >
                                    Criticidade
                                </ToggleGroupItem>
                                <ToggleGroupItem
                                    value="complexidade"
                                    aria-label="Complexidade"
                                    className={`px-3 py-2 rounded-md text-center cursor-pointer transition-colors ${
                                        selectedFilter === "complexidade"
                                            ? "bg-indigo-500 text-white"
                                            : "bg-gray-200"
                                    }`}
                                >
                                    Complexidade
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>

            {/* Gráfico de Chamados */}
            <CardContent className="mt-6 w-full">
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart layout="vertical" data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} hide />
                        <YAxis type="category" dataKey="categoria" />
                        {/* Atualize o Tooltip para exibir percentual e quantidade */}
                        <Tooltip 
                            formatter={(value: any, name: any, props: any) => [
                                `${value}% (${props.payload.quantidade} chamados)`, 
                                'Percentual'
                            ]} 
                        />
                        <Bar dataKey="percentual" fill="#8884d8" barSize={30} radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>

            <CardFooter className="flex-col items-center gap-2 text-sm mt-4">
                <div className="text-center font-medium">O maior índice identificado no gráfico é a criticidade de nível "Média", representando 40% dos chamados.</div>
            </CardFooter>
        </Card>
    );
}
