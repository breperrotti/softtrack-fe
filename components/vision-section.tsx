import { Layers3, Lightbulb, Shield, Zap } from "lucide-react";

export const Vision = () => {
  const features = [
    {
      icon: <Zap />,
      title: "Velocidade de Análise",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue.",
    },
    {
      icon: <Lightbulb />,
      title: "Mais Insights",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue.",
    },
    {
      icon: <Shield />,
      title: "Confiabilidade dos dados",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue.",
    },
    {
      icon: <Layers3 />,
      title: "Escalabilidade",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue.",
    },
  ];

  return (
    <section className="relative py-28 bg-roxo">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
        <div className="max-w-xl">
          <h3 className="text-white text-3xl font-semibold sm:text-4xl">
            Pilares da visão SoftTrack
          </h3>
          <p className="mt-3 w-96">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            recusandae id quo. Asperiores sed, quibusdam odit explicabo quisquam
            porro natus provident repellendus inventore eius aut at quis dolor
            suscipit deleniti.
          </p>
        </div>
        <div className="mt-12 lg:mt-0">
          <ul className="grid gap-8 sm:grid-cols-2">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 bg-black text-lilas rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg text-gray-100 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
    </section>
  );
};
