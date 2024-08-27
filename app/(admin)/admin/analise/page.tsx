"use client";

import { DemandasTable } from "@/components/demandas-table";
import { useWindowSize } from "@/hooks/use-window-size";


const AnalisePage = () => {

  return (
    <div>
      <div className="flex items-center justify-center h-full w-full p-8">
        <DemandasTable />
      </div>
    </div>
  );
};

export default AnalisePage;
