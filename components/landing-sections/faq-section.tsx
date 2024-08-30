import { Question2SVG, Question3SVG, QuestionSVG } from "@/svgs/svgs";
import { AccordionRealtime } from "../accordion-realtime";
import { Heading } from "../heading";

export const FaqSection = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="container mt-12">
          <Heading
            title="Perguntas Frequentes"
            badge="Perguntas Frequentes"
            classNameBadge="flex justify-center"
            classNameTitle="text-center"
            id="faq"
          />
          <p className=" mt-4 text-base md:text-lg text-muted-foreground text-center">
            A seção de Perguntas Frequentes oferece respostas rápidas e claras
            às dúvidas mais comuns sobre o produto. Aqui, você encontrará
            informações detalhadas sobre funcionalidades, suporte técnico e
            políticas de uso, garantindo que suas perguntas sejam respondidas de
            forma eficiente.
          </p>
          <div className="flex items-center justify-around">
            <div className="flex items-center justify-center">
              <AccordionRealtime />
            </div>
          </div>
        </div>

        <div
          className="absolute transform z-10 hidden md:block rotate-12"
          style={{ top: "5%", left: "85%" }}
        >
          <QuestionSVG />
        </div>
        <div
          className="absolute transform z-10 hidden md:block -rotate-12"
          style={{ top: "55%", left: "85%" }}
        >
          <QuestionSVG />
        </div>
        <div
          className="absolute transform z-10 hidden md:block "
          style={{ top: "35%", left: "  5%" }}
        >
          <QuestionSVG />
        </div>
        <div
          className="absolute transform z-10 hidden md:block rotate-12"
          style={{ top: "5%", left: "85%" }}
        >
          <QuestionSVG />
        </div>
        <div
          className="absolute transform z-10 hidden md:block rotate-12"
          style={{ top: "%", left: "24%" }}
        >
          <QuestionSVG />
        </div>

        <div
          className="absolute transform z-10 hidden md:block"
          style={{ top: "40%", left: "75%" }}
        >
          <Question2SVG />
        </div>
        <div
          className="absolute transform z-10 hidden md:block rotate-12"
          style={{ top: "80%", left: "90%" }}
        >
          <Question2SVG />
        </div>
        <div
          className="absolute transform z-10 hidden md:block rotate-12"
          style={{ top: "3%", left: "20%" }}
        >
          <Question2SVG />
        </div>
        <div
          className="absolute transform z-10 hidden md:block rotate-12"
          style={{ top: "55%", left: "12%" }}
        >
          <Question2SVG />
        </div>

        <div
          className="absolute transform z-10 hidden md:block"
          style={{ top: "30%", left: "90%" }}
        >
          <Question3SVG />
        </div>
        <div
          className="absolute transform z-10 hidden md:block rotate-12"
          style={{ top: "75%", left: "71%" }}
        >
          <Question3SVG />
        </div>
        <div
          className="absolute transform z-10 hidden md:block -rotate-12"
          style={{ top: "0%", left: "65%" }}
        >
          <Question3SVG />
        </div>
        <div
          className="absolute transform z-10 hidden md:block -rotate-12"
          style={{ top: "0%", left: "2%" }}
        >
          <Question3SVG />
        </div>
        <div
          className="absolute transform z-10 hidden md:block "
          style={{ top: "80%", left: "2%" }}
        >
          <Question3SVG />
        </div>
        <div
          className="absolute transform z-10 hidden md:block -rotate-12"
          style={{ top: "40%", left: "25%" }}
        >
          <Question3SVG />
        </div>
      </div>
      {/* End Hero */}
    </>
  );
};
