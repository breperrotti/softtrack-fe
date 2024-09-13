import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const accordionData = [
  {
    value: "item-1",
    trigger: "Como posso começar a usar o produto?",
    content: "Para começar, você precisa se inscrever no nosso site e criar uma conta. Após o cadastro, você receberá um e-mail de confirmação com instruções para acessar o painel de controle e começar a explorar as funcionalidades do produto",
    color: "bg-roxo" 
  },
  {
    value: "item-2",
    trigger: "O produto oferece suporte técnico?",
    content: "Sim, oferecemos suporte técnico completo. Você pode entrar em contato com nossa equipe de suporte através do e-mail suporte@exemplo.com ou pelo chat ao vivo disponível em nosso site durante o horário comercial.",
    color: "bg-verde" 
  },
  {
    value: "item-3",
    trigger: "Quais são as opções de pagamento disponíveis?",
    content: "Aceitamos diversas formas de pagamento, incluindo cartões de crédito, débito, e transferências bancárias. Você pode escolher sua forma de pagamento preferida durante o processo de checkout.",
    color: "bg-roxo"
  },
  {
    value: "item-4",
    trigger: "O que devo fazer se encontrar um erro ou problema técnico?",
    content: "Se você encontrar um erro ou problema técnico, por favor, entre em contato com nossa equipe de suporte técnico. Forneça detalhes sobre o problema para que possamos resolvê-lo o mais rápido possível.",
    color: "bg-verde"
  },
  {
    value: "item-5",
    trigger: "O produto é compatível com dispositivos móveis?",
    content: "Sim, o nosso produto é totalmente compatível com dispositivos móveis. Você pode acessar todas as funcionalidades através do seu smartphone ou tablet, garantindo uma experiência contínua e eficiente em qualquer lugar.",
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
