"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Card {
  title: string;
  value: string;
  percentage: string;
  trend: "up" | "down";
}

const cards: Card[] = [
  {
    title: "Pirâmide vendas",
    value: "3.76%",
    percentage: "17%",
    trend: "up",
  },
  {
    title: "Teste",
    value: "7.65k",
    percentage: "19%",
    trend: "up",
  },
  {
    title: "Teste 3",
    value: "4.12k",
    percentage: "12%",
    trend: "up",
  },
  {
    title: "Teste 2",
    value: "32.4k",
    percentage: "1.2%",
    trend: "down",
  },
  {
    title: "Teste 4",
    value: "4.3k",
    percentage: "9%",
    trend: "up",
  },
  {
    title: "Teste 5",
    value: "6m 2s",
    percentage: "13%",
    trend: "up",
  },
  {
    title: "Teste 6",
    value: "45%",
    percentage: "3%",
    trend: "down",
  },
  {
    title: "Teste 7",
    value: "2.5k",
    percentage: "22%",
    trend: "up",
  },
  {
    title: "Teste 8",
    value: "1.8k",
    percentage: "8%",
    trend: "up",
  },
  {
    title: "Teste 9",
    value: "92%",
    percentage: "5%",
    trend: "up",
  },
  {
    title: "Teste",
    value: "$12.4k",
    percentage: "4%",
    trend: "up",
  },
  {
    title: "Net Revenue",
    value: "$8.9k",
    percentage: "2%",
    trend: "down",
  },
];


const Card = ({ title, value, percentage, trend }: Card) => {
  return (
    <div
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-300 ease-in-out hover:scale-[103%]",
        // light styles
        "border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[2px_2px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none"
      )}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <span className="text-sm sm:text-lg font-medium">{title}</span>
          <span className="text-lg font-bold">{value}</span>
        </div>
        <div className={`text-lg font-bold ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
          {percentage} {trend === "up" ? "↑" : "↓"}
        </div>
      </div>
    </div>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg bg-lilas border-2 border-black shadow-2xl",
        className
      )}
    >
      <AnimatedList>
        {cards.map((card, idx) => (
          <Card {...card} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
