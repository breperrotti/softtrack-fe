import { useEffect, useState } from "react";
import "./style.css";
import { createSwapy } from "swapy";
import { GraficoBalancoChamadosConsultoresSegmento } from "./charts/grafico-balanco-chamados-consultores";
import { GraficoCustoConsultoresChamados } from "./charts/grafico-custo-consultores-chamados";
import { Button } from "./ui/button";

const DEFAULT = {
  "1": "a",
  "3": "c",
  "4": "d",
  "2": null,
};

function A() {
  return (
    <div className="item a" data-swapy-item="a">
      <div>A</div>
    </div>
  );
}

function C() {
  return (
    <div className="item c" data-swapy-item="c">
      <GraficoBalancoChamadosConsultoresSegmento />
    </div>
  );
}

function D() {
  return (
    <div className="item d max-h-fit w-full" data-swapy-item="d">
      <GraficoCustoConsultoresChamados />
    </div>
  );
}

function getItemById(itemId: "a" | "c" | "d" | null) {
  switch (itemId) {
    case "a":
      return <A />;
    case "c":
      return <C />;
    case "d":
      return <D />;
  }
}

export function OverviewDashboard() {
  const slotItems: Record<string, "a" | "c" | "d" | null> =
    localStorage.getItem("slotItem")
      ? JSON.parse(localStorage.getItem("slotItem")!)
      : DEFAULT;
  
  const [swapyInstance, setSwapyInstance] = useState<any>(null);
  const [isSwapyEnabled, setIsSwapyEnabled] = useState(true);

  useEffect(() => {
    const container = document.querySelector(".teste")!;
    const swapy = createSwapy(container, { animation: "spring" });
    swapy.onSwap(({ data }) => {
      localStorage.setItem("slotItem", JSON.stringify(data.object));
    });
    setSwapyInstance(swapy);
  }, []);

  const toggleSwapy = () => {
    if (swapyInstance) {
      swapyInstance.enable(!isSwapyEnabled);
      setIsSwapyEnabled(!isSwapyEnabled);
    }
  };

  return (
    <div className="relative">
      <div className="teste">
        <div className="slot a" data-swapy-slot="1">
          {getItemById(slotItems["1"])}
        </div>
        <div className="second-row">
          <div className="slot b" data-swapy-slot="2">
            {getItemById(slotItems["2"])}
          </div>
          <div className="slot c" data-swapy-slot="3">
            {getItemById(slotItems["3"])}
          </div>
        </div>
        <div className="slot d" data-swapy-slot="4">
          {getItemById(slotItems["4"])}
        </div>
      </div>
      <Button
        className="fixed bottom-2 right-2 z-50"
        onClick={toggleSwapy}
      >
        {isSwapyEnabled ? "Desativar Layout" : "Ativar Layout"}
      </Button>
    </div>
  );
}
