import { getRandomNumber } from "@/lib/utils";

export interface Contrato {
  name: string;
  id: string;
  tipo: string;
  modulo: string;
  tipo_demanda: string;
  baseline: number;
  valor: string;
  equipe: Equipe[];
  inicio: string;
  fim: string;
  imgUrl: string;
  description: string;
  consultores: string;
  demandas: string;
}

export interface Equipe {
  id: string;
}

export const contratos: Contrato[] = [
  {
    name: "Apple",
    id: "1",
    tipo: "Tipo 1",
    modulo: "Módulo 1",
    tipo_demanda: "Demanda 1",
    baseline: 100,
    valor: "10000",
    equipe: [{ id: "E1" }, { id: "E2" }],
    inicio: "24-01-01",
    fim: "24-12-31",
    imgUrl: "/apple.png",
    description:
      "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.",
    consultores: "10",
    demandas: "10",
  },
  {
    name: "Microsoft",
    id: "2",
    tipo: "Tipo 2",
    modulo: "Módulo 2",
    tipo_demanda: "Demanda 2",
    baseline: 200,
    valor: "10000",
    equipe: [{ id: "E3" }, { id: "E4" }],
    inicio: "24-02-01",
    fim: "24-11-30",
    imgUrl: "/microsoft.png",
    description:
      "Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    consultores: "10",
    demandas: "10",
  },
  {
    name: "Saudi Aramco",
    id: "3",
    tipo: "Tipo 1",
    modulo: "Módulo 3",
    tipo_demanda: "Demanda 3",
    baseline: 150,
    valor: "10000",
    equipe: [{ id: "E5" }, { id: "E6" }],
    inicio: "24-03-01",
    fim: "24-10-31",
    imgUrl: "/microsoft.png",
    description:
      "Saudi Aramco, officially the Saudi Arabian Oil Group or simply Aramco, is a Saudi Arabian national petroleum and natural gas company based in Dhahran, Saudi Arabia.",
    consultores: "10",
    demandas: "10",
  },
  {
    name: "Amazon",
    id: "4",
    tipo: "Tipo 3",
    modulo: "Módulo 1",
    tipo_demanda: "Demanda 4",
    baseline: 180,
    valor: "10000",
    equipe: [{ id: "E7" }, { id: "E8" }],
    inicio: "24-04-01",
    fim: "24-09-30",
    imgUrl: "/apple.png",
    description:
      "Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    consultores: "10",
    demandas: "10",
  },
  {
    name: "Alphabet",
    id: "5",
    tipo: "Tipo 2",
    modulo: "Módulo 4",
    tipo_demanda: "Demanda 5",
    baseline: 130,
    valor: "10000",
    equipe: [{ id: "E9" }, { id: "E10" }],
    inicio: "24-05-01",
    fim: "24-08-31",
    imgUrl: "/apple.png",
    description:
      "Alphabet Inc. is an American multinational conglomerate headquartered in Mountain View, California. It was created through a corporate restructuring of Google and became the parent company of Google and several former Google subsidiaries.",
    consultores: "10",
    demandas: "10",
  },
  {
    name: "Berkshire Hathaway",
    id: "6",
    tipo: "Tipo 1",
    modulo: "Módulo 2",
    tipo_demanda: "Demanda 6",
    baseline: 210,
    valor: "10000",
    equipe: [{ id: "E11" }, { id: "E12" }],
    inicio: "24-06-01",
    fim: "24-07-31",
    imgUrl: "/microsoft.png",
    description:
      "Berkshire Hathaway Inc. is an American multinational conglomerate holding company headquartered in Omaha, Nebraska, United States. The company wholly owns GEICO, Duracell, Dairy Queen, BNSF, Lubrizol, Fruit of the Loom, Helzberg Diamonds, Long & Foster, FlightSafety International, Pampered Chef, Forest River, and NetJets.",
    consultores: "10",
    demandas: "10",
  },
  {
    name: "Tesla",
    id: "7",
    tipo: "Tipo 3",
    modulo: "Módulo 3",
    tipo_demanda: "Demanda 7",
    baseline: 160,
    valor: "10000",
    equipe: [{ id: "E13" }, { id: "E14" }],
    inicio: "24-07-01",
    fim: "24-06-30",
    imgUrl: "/microsoft.png",
    description:
      "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid-scale, solar panels and solar roof tiles, and related products and services.",
    consultores: "10",
    demandas: "10",
  },
  {
    name: "Meta Platforms",
    id: "8",
    tipo: "Tipo 2",
    modulo: "Módulo 1",
    tipo_demanda: "Demanda 8",
    baseline: 120,
    valor: "10000",
    equipe: [{ id: "E15" }, { id: "E16" }],
    inicio: "24-08-01",
    fim: "24-05-31",
    imgUrl: "/apple.png",
    description:
      "Meta Platforms, Inc., doing business as Meta and formerly known as Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California.",
    consultores: "10",
    demandas: "10",
  },
  {
    name: "Taiwan Semic",
    id: "9",
    tipo: "Tipo 1",
    modulo: "Módulo 4",
    tipo_demanda: "Demanda 9",
    baseline: 170,
    valor: "10000",
    equipe: [{ id: "E17" }, { id: "E18" }],
    inicio: "24-09-01",
    fim: "24-04-30",
    imgUrl: "/apple.png",
    description:
      "Taiwan Semiconductor Manufacturing Company, Limited (TSMC) is a Taiwanese multinational semiconductor contract manufacturing and design company. It is the world's most valuable semiconductor company, the world's largest dedicated independent (pure-play) semiconductor foundry, and one of Taiwan's largest companies.",
    consultores: "10",
    demandas: "10",
  },
  {
    name: "Tencent",
    id: "10",
    tipo: "Tipo 3",
    modulo: "Módulo 2",
    tipo_demanda: "Demanda 10",
    baseline: 190,
    valor: "10000",
    equipe: [{ id: "E19" }, { id: "E20" }],
    inicio: "24-10-01",
    fim: "24-03-31",
    imgUrl: "/microsoft.png",
    description:
      "Tencent Holdings Ltd., also known as Tencent, is a Chinese multinational technology and entertainment conglomerate and holding company headquartered in Shenzhen. It is the largest company in the video game industry in the world based on its investments.",
    consultores: "10",
    demandas: "10",
  },
];
