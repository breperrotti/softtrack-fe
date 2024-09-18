"use client";
import * as XLSX from "xlsx";
import { Button } from "@/components/ui/button";
import { contratos } from "@/mocks/contracts";
import { useState } from "react";
import {GraficoDesvioEscopo } from "@/app/(admin)/_components/charts/grafico-desvio-escopo";


function generateFilename() {
  const now = new Date();
  return `Demandas_${now.toISOString().slice(0, 19).replace(/:/g, "-")}.xlsx`;
}

function exportToXlsx(selectedRows: typeof contratos) {
  const ws = XLSX.utils.json_to_sheet(selectedRows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Contratos");
  XLSX.writeFile(wb, generateFilename());
}

export function ContractManagementPage() {
  const [selectedContract, setSelectedContract] = useState(contratos[1]);

  const handleExport = () => {
    exportToXlsx(contratos);
  };

  const calculateUtilizationRate = () => {
    const totalHoursAllocated = selectedContract.horas_gestao;
    const totalHoursWorked = (
      (parseFloat(selectedContract.expert.percentual.replace("%", "")) / 100) * totalHoursAllocated +
      (parseFloat(selectedContract.senior.percentual.replace("%", "")) / 100) * totalHoursAllocated +
      (parseFloat(selectedContract.pleno.percentual.replace("%", "")) / 100) * totalHoursAllocated +
      (parseFloat(selectedContract.junior.percentual.replace("%", "")) / 100) * totalHoursAllocated +
      (parseFloat(selectedContract.estagiario.percentual.replace("%", "")) / 100) * totalHoursAllocated
    );
    return ((totalHoursWorked / totalHoursAllocated) * 100).toFixed(2);
  };

  const calculateTotalCostByExpertise = () => {
    const expertCost = parseFloat(selectedContract.expert.custo_venda.replace("R$", "").replace(".", "").replace(",", "."));
    const seniorCost = parseFloat(selectedContract.senior.custo_venda.replace("R$", "").replace(".", "").replace(",", "."));
    const plenoCost = parseFloat(selectedContract.pleno.custo_venda.replace("R$", "").replace(".", "").replace(",", "."));
    const juniorCost = parseFloat(selectedContract.junior.custo_venda.replace("R$", "").replace(".", "").replace(",", "."));
    const estagiarioCost = parseFloat(selectedContract.estagiario.custo_venda.replace("R$", "").replace(".", "").replace(",", "."));
    return expertCost + seniorCost + plenoCost + juniorCost + estagiarioCost;
  };

  const calculateManagementCost = () => {
    return (
      parseFloat(selectedContract.custo_venda_gestao.replace("R$", "").replace(".", "").replace(",", ".")) * selectedContract.horas_gestao
    ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

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
            value={selectedContract.projeto}
            onChange={(e) => setSelectedContract(contratos.find(c => c.projeto === e.target.value)!)}
            className="p-2 border rounded-md"
          >
            {contratos.map((contract) => (
              <option key={contract.projeto} value={contract.projeto}>
                {contract.descricao}
              </option>
            ))}
          </select>
        </div>
        <Button variant="outline" onClick={handleExport}>
          Exportar Todos
        </Button>
      </div>

      {/* New Contract Details Card */}
      <div className="p-4 bg-white rounded-lg mb-6 shadow">
        <p className="text-xl font-bold">Detalhes do Contrato</p>
        <p className="text-lg">Nome do Contrato: {selectedContract.projeto}</p>
        <p className="text-lg">Início do Contrato: {selectedContract.inicio_contrato}</p>
        <p className="text-lg">Fim do Contrato: {selectedContract.fim_contrato}</p>
        <p className="text-lg">Valor Total do Contrato: {selectedContract.valor_contrato}</p>
        <p className="text-lg">Valor da Gestão por Horas: {calculateManagementCost()}</p>
      </div>

      {/* KPIs Section */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-white rounded-lg text-center shadow ">
          <p className="text-xl font-bold">Execução do Contrato</p>
          <p className="text-3xl">
            {(selectedContract.horas_gestao / selectedContract.baseline) * 100}%
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg text-center shadow">
          <p className="text-xl font-bold">Custo por Expertise</p>
          <p className="text-3xl">
            {calculateTotalCostByExpertise().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
          <p className="text-sm text-red-500">Custo total por hora (Consultores)</p>
        </div>

        <div className="p-4 bg-white rounded-lg text-center shadow">
          <p className="text-xl font-bold">Utilização de Recursos</p>
          <p className="text-3xl">{calculateUtilizationRate()}%</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <GraficoDesvioEscopo/>
        <GraficoDesvioEscopo/>
        <GraficoDesvioEscopo/>
      </div>

    </div>
  );
}
