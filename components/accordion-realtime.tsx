import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const accordionData = [
  {
    value: "item-1",
    trigger: "Monitoramento Contínuo",
    content: "Acompanhe todas as demandas em tempo real com painéis claros e intuitivos, garantindo ação rápida e informada.",
    color: "bg-roxo"  // Cor azul
  },
  {
    value: "item-2",
    trigger: "Priorização Inteligente",
    content: "Nossa IA avalia a criticidade das demandas, sugerindo prioridades para focar no que realmente importa.",
    color: "bg-verde" // Cor verde
  },
  {
    value: "item-3",
    trigger: "Alocação Dinâmica de Recursos",
    content: "Recomendações de alocação ideais com base em disponibilidade e habilidades, evitando desperdícios e sobrecargas.",
    color: "bg-roxo" // Cor amarela
  },
  {
    value: "item-4",
    trigger: "Alertas e Notificações",
    content: "Receba alertas imediatos sobre mudanças no status das demandas, garantindo que nenhuma seja negligenciada.",
    color: "bg-verde" // Cor vermelha
  },
  {
    value: "item-5",
    trigger: "Análise e Relatórios",
    content: "Gere relatórios em tempo real para avaliar a performance e ajustar estratégias conforme necessário.",
    color: "bg-roxo" // Cor roxa
  }
];

export const AccordionRealtime = () => {
  return (
    <div className="">
      <Accordion className="w-full" type="single">
        {accordionData.map((item) => (
          <AccordionItem
            key={item.value}
            className={`${item.color} lg:w-[570px] max-w-full border-2 border-black transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[4px_4px_0px_black]`}
            value={item.value}
          >
            <AccordionTrigger className="text-white text-xl font-extrabold">{item.trigger}</AccordionTrigger>
            <AccordionContent className="font-bold text-xl">{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
