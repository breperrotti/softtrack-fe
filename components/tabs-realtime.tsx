import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabsData = [
  {
    value: "item-2",
    trigger: "Priorização Inteligente",
    content:
      "Nossa IA avalia a criticidade das demandas, sugerindo prioridades para focar no que realmente importa.",
  },
  {
    value: "item-3",
    trigger: "Alocação Dinâmica de Recursos",
    content:
      "Recomendações de alocação ideais com base em disponibilidade e habilidades, evitando desperdícios e sobrecargas.",
  },
  {
    value: "item-5",
    trigger: "Análise e Relatórios",
    content:
      "Gere relatórios em tempo real para avaliar a performance e ajustar estratégias conforme necessário.",
  },
];

export const TabsRealtime = () => {
  return (
    <div>
      <Tabs defaultValue="item-2">
        <TabsList className="flex gap-2 h-fit bg-white mt-4">
          {tabsData.map((tab, index) => (
            <TabsTrigger
              value={tab.value}
              className="border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[2px_2px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none"
              key={index}
            >
              <div className="text-xs text-black font-semibold">
                {tab.trigger}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsData.map((tab, index) => (
          <TabsContent key={index} value={tab.value}>
            <div className="border-2 rounded-md p-6">{tab.content}</div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
