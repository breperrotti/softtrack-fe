import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const accordionData = [
  {
    value: "item-1",
    trigger: "Como posso começar a usar a solução de gestão preditiva?",
    content: "Para começar, inscreva-se no nosso site e crie uma conta. Após o cadastro, você receberá um e-mail com instruções para acessar o painel e começar a explorar as ferramentas de análise preditiva e otimização de recursos.",
    color: "bg-roxo" 
  },
  {
    value: "item-2",
    trigger: "O sistema oferece suporte técnico especializado?",
    content: "Sim, nossa equipe de suporte está disponível para ajudar com qualquer questão técnica. Entre em contato por e-mail ou pelo nosso chat ao vivo, disponível durante o horário comercial, para suporte completo.",
    color: "bg-verde" 
  },
  {
    value: "item-3",
    trigger: "Como a análise preditiva ajuda minha empresa?",
    content: "Nosso sistema utiliza IA avançada para prever demandas e otimizar a alocação de recursos, garantindo que sua empresa esteja sempre preparada para mudanças. Essas previsões são baseadas em dados históricos e em tempo real, permitindo uma gestão eficiente.",
    color: "bg-roxo"
  },
  {
    value: "item-4",
    trigger: "A solução tem validação científica?",
    content: "Sim, nossa solução foi validada cientificamente pela Universidade de St. Gallen, comprovando a eficácia de nossa abordagem.",
    color: "bg-verde"
  },
  {
    value: "item-5",
    trigger: "O sistema funciona em dispositivos móveis?",
    content: "Sim, nossa plataforma é totalmente compatível com dispositivos móveis. Isso permite que você acesse todas as funcionalidades, monitore as previsões e tome decisões estratégicas diretamente de seu smartphone ou tablet.",
    color: "bg-roxo" 
  }
];


export const AccordionFAQ = () => {
  return (
    <div className="mt-12">
      <Accordion className="w-full" type="multiple">
        {accordionData.map((item) => (
          <AccordionItem
            key={item.value}
            className={`${item.color} lg:w-[570px] max-w-full border-2 border-black transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[4px_4px_0px_black]`}
            value={item.value}
          >
            <AccordionTrigger className="text-white text-xl font-extrabold text-start">{item.trigger}</AccordionTrigger>
            <AccordionContent className="font-bold text-md">{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
