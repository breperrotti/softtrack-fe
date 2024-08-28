import { cn } from "@/lib/utils";
import {
  BookOpenIcon,
  ChartLine,
  ChevronRightIcon,
  Cog,
  Lightbulb,
  User,
} from "lucide-react";
import { Syne } from "next/font/google";
import Link from "next/link";

const visionData = [
  {
    title: "Inovação Contínua",
    desc: "Desenvolvemos soluções que antecipam e moldam o futuro digital.",
    icon: <Lightbulb />,
  },
  {
    title: "Eficiência Operacional",
    desc: "Maximizamos a produtividade com automação e tecnologia de ponta.",
    icon: <Cog />,
  },
  {
    title: "Experiência do Usuário",
    desc: "Criamos interfaces intuitivas que se adaptam às necessidades individuais.",
    icon: <User />,
  },
  {
    title: "Decisão Baseada em Dados",
    desc: "Capacitamos decisões estratégicas com insights precisos em tempo real.",
    icon: <ChartLine />,
  },
];

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const VisionSection = () => {
  return (
    <>
      {/* Icon Blocks */}
      <div className="py-24 lg:py-32 relative">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 px-60">
          <div className="grid grid-rows-2 grid-cols-2 gap-6">
            {visionData.map((vision, index) => (
              <a
                className="group flex flex-col justify-center md:p-5 border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[4px_4px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none"
                href={""}
                key={index}
              >
                <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
                  <div className="flex-shrink-0 w-6 h-6 text-primary-foreground">
                    {vision.icon}
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-semibold">{vision.title}</h3>
                  <p className="mt-1 text-muted-foreground">{vision.desc}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="lg:w-3/4">
            <h2 className={cn("scroll-m-20 border-b pb-2 text-5xl font-bold tracking-tight transition-colors first:mt-0", syne.className)}>
              Entenda um pouco mais sobre a nossa visão
            </h2>
            <p className="mt-3 text-muted-foreground">
              Na Softtrack, somos especialistas em desenvolver soluções que
              alavancam a tecnologia para resolver desafios complexos de gestão.
              Nossa missão é capacitar empresas com ferramentas inovadoras que
              aumentam a eficiência operacional e maximizam resultados
            </p>
            <p className="mt-5">
              <Link
                className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 "
                href="/about"
              >
                Conheça o coração do nosso projeto
                <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
              </Link>
            </p>
          </div>
        </div>

        {/* SVG Position */}
        <div className="absolute  top-2/4 right-72 transform -rotate-45 translate-y-20">
          <svg
            width="300"
            height="300"
            viewBox="0 0 793 794"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M457.664 164.989C456.539 147.694 455.454 104.074 458.483 100.497C462.71 95.5058 469.958 93.8464 476.002 92.2679C476.155 77.5777 476.577 62.8269 476.356 48.1362C476.24 40.4456 476.003 29.7284 479.523 22.687C483.131 15.4684 498.524 8.49778 502.334 19.4457C504.193 24.7854 503.79 30.9063 504.066 36.4761C504.624 47.7339 504.586 59.0072 504.719 70.2733C509.015 63.5 520.947 63.0185 526.027 69.1584C527.911 71.4351 528.345 74.5254 528.593 77.3916C535.904 67.8289 546.548 76.8149 550.281 84.9529C552.214 84.2954 554.071 83.5799 556.124 83.3838C564.897 82.5458 569.713 91.5418 570.916 98.9872C571.982 105.577 572.254 144.902 571.901 163.912"
              stroke="black"
              stroke-width="4.58579"
              stroke-miterlimit="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="fill-orange-200"
            />
            <path
              d="M475.951 92.1924C475.616 102.018 477.087 111.927 476.693 121.774"
              stroke="black"
              stroke-width="4.58579"
              stroke-miterlimit="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className=""
            />
            <path
              d="M452.639 190.106C452.362 182.033 452.589 173.768 452.73 165.957C461.96 164.347 471.181 165.438 480.452 165.572C489.3 165.699 498.172 164.907 507.033 164.942C530.202 165.035 553.493 163.078 576.672 163.907C576.564 170.34 576.934 180.064 577.069 188.402"
              stroke="black"
              stroke-width="4.58579"
              stroke-miterlimit="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="fill-verde"
            />
            <path
              d="M469.688 779.989C468.619 754.427 472.125 708.269 459.104 683.354C451.349 668.515 432.978 667.964 418.441 667.423C381.67 666.053 352.619 663.766 315.72 662.983C132.397 659.089 139.065 332.475 324.041 327.461C353.03 326.675 381.804 324.417 410.882 325.026C436.207 325.556 443.582 310.067 445.829 287.125C448.949 255.276 441.697 221.992 446.054 190.444C470.368 191.952 494.628 188.992 518.891 189.06C541.459 189.123 564.331 189.702 586.902 188.857C584.393 201.086 587.31 216.458 587.674 229C588.563 259.648 583.777 316.437 582.677 347.097C582.034 365.028 580.133 388.068 569.798 403.299C556.559 422.807 533.421 437.946 512.352 447.959C496.945 455.282 479.98 460.038 462.999 461.506C440.553 463.448 417.844 466.26 395.48 468.008C371.076 469.916 345.089 474.221 341.084 499.856C339.764 508.305 341.904 516.519 348.104 522.639C361.862 536.223 424.801 534.994 438.596 534.822C484.953 534.244 553.001 539.135 590.12 585.991C606.561 606.746 611.561 656.758 611.153 681.423C610.621 713.585 612.212 738.377 609.949 770.49"
              stroke="black"
              stroke-width="4.58579"
              stroke-miterlimit="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="fill-roxo"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
