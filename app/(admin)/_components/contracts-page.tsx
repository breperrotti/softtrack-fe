"use client";
import * as XLSX from "xlsx";
import * as React from "react";
import {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import { Table } from "./ui/table"; 
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

// Mock data (replace with your data fetching logic)
const contracts = [
  { id: "1", name: "Contract A" },
  { id: "2", name: "Contract B" },
  { id: "3", name: "Contract C" },
];

// Mock demand data (replace with your data fetching logic)
const demandas = [
  { chamado: "Operador está faltando.", id: "123", projeto: "Projeto X", consultor: "John", tipo_chamado: "Suporte", complexidade: "Média", dt_abertura_chamado: "2023-09-01" },
  { chamado: "Bold text column", id: "456", projeto: "Projeto Y", consultor: "Alice", tipo_chamado: "Manutenção", complexidade: "Alta", dt_abertura_chamado: "2023-09-05" },
  // Add more data as needed
];

export const columns: ColumnDef<typeof demandas[0]>[] = [
  { accessorKey: "chamado", header: "Chamado" },
  { accessorKey: "id", header: "ID" },
  { accessorKey: "projeto", header: "Projeto" },
  { accessorKey: "consultor", header: "Consultor" },
  { accessorKey: "tipo_chamado", header: "Tipo Chamado" },
  { accessorKey: "complexidade", header: "Complexidade" },
  { accessorKey: "dt_abertura_chamado", header: "Data de Abertura" },
];

function generateFilename() {
  const now = new Date();
  return `Demandas_${now.toISOString().slice(0, 19).replace(/:/g, "-")}.xlsx`;
}

function exportToXlsx(selectedRows: typeof demandas[0][]) {
  const ws = XLSX.utils.json_to_sheet(selectedRows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Demandas");
  XLSX.writeFile(wb, generateFilename());
}

export function ContractManagementPage() {
  const [selectedContract, setSelectedContract] = useState(contracts[0].id);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: demandas,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleExport = useCallback(() => {
    const selectedRows = table.getRowModel().rows
      .filter(row => row.getIsSelected())
      .map(row => row.original);
    exportToXlsx(selectedRows);
  }, [table]);

  return (
    <div className="w-full p-6">
      {/* Contract Selector */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <label htmlFor="contract-select" className="mr-4 text-lg font-medium">
            Selecione o Contrato:
          </label>
          <select
            id="contract-select"
            value={selectedContract}
            onChange={(e) => setSelectedContract(e.target.value)}
            className="p-2 border rounded-md"
          >
            {contracts.map((contract) => (
              <option key={contract.id} value={contract.id}>
                {contract.name}
              </option>
            ))}
          </select>
        </div>
        <Button variant="outline" onClick={handleExport}>
          Exportar Todos
        </Button>
      </div>

      {/* KPIs Section */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg text-center">
          <p className="text-xl font-bold">Custo Total do Projeto</p>
          <p className="text-3xl">R$ 1.500.000</p>
          <p className="text-sm text-green-500">+5% (Aumento)</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg text-center">
          <p className="text-xl font-bold">Taxa de Utilização de Recursos</p>
          <p className="text-3xl">85%</p>
          <p className="text-sm text-red-500">-10% (Redução)</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg text-center">
          <p className="text-xl font-bold">Taxa de Substituição de Recursos</p>
          <p className="text-3xl">4%</p>
          <p className="text-sm text-red-500">+50% (Alerta)</p>
        </div>
      </div>
      {/* End KPIs Section */}
    </div>
  );
}
