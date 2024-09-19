"use client";
import { Button } from "@/components/ui/button";
import { Contrato, contratos, Demanda, demandas } from "@/mocks/contracts";
import { useState } from "react";
import { GraficoDesvioEscopo } from "@/app/(admin)/_components/charts/grafico-desvio-escopo";
import { GraficoPrevisaoDemanda } from "./charts/grafico-previsao-demanda";
import { ModalContract } from "./modals/modal-contracts";
import { calcularCustoConsultores, calcularCustoGestao, calcularDesvioEscopo, calcularDesvioSLA, calcularLucroOperacional, calcularRentabilidade, calcularTotalHorasProjeto, calculateUtilizationRate, converterHorasParaHorasMinutos } from "./actions/contracts_helper";

export function ContractManagementPage() {
  const [selectedContract, setSelectedContract] = useState(contratos[0]);
  const [showModal, setShowModal] = useState(false);
  const [showFinancialData, setShowFinancialData] = useState(false); 
  const [showHoursData, setShowHoursData] = useState(false); 

  const handleContractChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value, 10);
    setSelectedContract(contratos[index]);
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
            value={contratos.indexOf(selectedContract)}
            onChange={handleContractChange}
            className="p-2 border rounded-md"
          >
            {contratos.map((contract, index) => (
              <option key={index} value={index}>
                PROJETO_{(index + 1).toString().padStart(2, "0")}
              </option>
            ))}
          </select>
        </div>

        <Button variant="outline" onClick={() => setShowModal(true)}>
          Ver Custo dos Consultores
        </Button>
      </div>
      
      {/* New Contract Details Card */}
      <div className="p-4 bg-white rounded-lg mb-6 shadow">
        <p className="text-xl font-bold">Detalhes do Contrato</p>
        <p className="text-lg">Nome do Contrato: {selectedContract.projeto}</p>
        <p className="text-lg">Início do Contrato: {selectedContract.inicio_contrato}</p>
        <p className="text-lg">Fim do Contrato: {selectedContract.fim_contrato}</p>
        <p className="text-lg">Valor Total do Contrato: {selectedContract.valor_contrato}</p>
        <p className="text-lg">Valor da Gestão: {calcularCustoGestao(selectedContract).toFixed(2)}</p>
      </div>

      {/* Toggle Buttons */}
      <div className="mb-6 flex space-x-4">
        <Button variant="outline" onClick={() => setShowFinancialData(!showFinancialData)}>
          {showFinancialData ? "Ocultar Dados Financeiros" : "Mostrar Dados Financeiros"}
        </Button>
        <Button variant="outline" onClick={() => setShowHoursData(!showHoursData)}>
          {showHoursData ? "Ocultar Dados de Horas" : "Mostrar Dados de Horas"}
        </Button>
      </div>

            
      {/* Financial Data (Lucro Operacional, Custo Consultores, Utilização de Recursos) */}
      {showFinancialData && (
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="p-4 bg-white rounded-lg text-center shadow">
            <p className="text-xl font-bold">Lucro Operacional</p>
            <p className="text-3xl">
              R$ {calcularLucroOperacional(selectedContract).toFixed(2)}
            </p>
            <p className="text-sm text-red-500">
              {calcularLucroOperacional(selectedContract) === 0
                ? "Sem lucro"
                : "Lucro obtido"}
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg text-center shadow">
            <p className="text-xl font-bold">Custo Consultores</p>
            <p className="text-3xl">
              R$ {calcularCustoConsultores(selectedContract).toFixed(2)}
            </p>
            <p className="text-sm text-red-500">70% do valor total</p>
          </div>

          <div className="p-4 bg-white rounded-lg text-center shadow">
            <p className="text-xl font-bold">Utilização de Recursos</p>
            <p className="text-3xl">{calculateUtilizationRate(selectedContract)}%</p>
          </div>
        </div>
      )}

      {/* Hours Data (Horas Contratadas, Desvio de Horas, Horas Trabalhadas) */}
      {showHoursData && (
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Card de Horas Contratadas */}
          <div className="p-4 bg-white rounded-lg text-center">
            <p className="text-xl font-bold">Horas Contratadas</p>
            <p className="text-3xl">
              {contratos[contratos.indexOf(selectedContract)].baseline} h
            </p>
          </div>

          {/* Card de Desvio Horas */}
          <div className="p-4 bg-white rounded-lg text-center">
            <p className="text-xl font-bold">Desvio de Horas Contratadas</p>
            <p className="text-3xl">
              {converterHorasParaHorasMinutos(
                Math.max(
                  0,
                  calcularTotalHorasProjeto(demandas, selectedContract.projeto) -
                    contratos[contratos.indexOf(selectedContract)].baseline
                )
              )}
            </p>
          </div>

          {/* Card de Horas Trabalhadas */}
          <div className="p-4 bg-white rounded-lg text-center">
            <p className="text-xl font-bold">Horas Trabalhadas</p>
            <p className="text-3xl">
              {converterHorasParaHorasMinutos(
                calcularTotalHorasProjeto(demandas, selectedContract.projeto)
              )}
            </p>
          </div>
        </div>
      )}

      {/* Charts */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <GraficoDesvioEscopo
          nome="Desvio de Escopo"
          subtitle="Setembro - 2024"
          valor={calcularDesvioEscopo(
            calcularTotalHorasProjeto(demandas, selectedContract.projeto), 
            contratos[contratos.indexOf(selectedContract)].baseline 
          )}
          labelFinal={`Escopo excedido em ${calcularDesvioEscopo(
            calcularTotalHorasProjeto(demandas, selectedContract.projeto),
            contratos[contratos.indexOf(selectedContract)].baseline
          ).toFixed(2)}% devido ao uso de mais horas do que o planejado.`}
        />
        <GraficoDesvioEscopo
          nome="Rentabilidade do Projeto"
          subtitle="Setembro - 2024"
          valor={calcularRentabilidade(selectedContract)}
          labelFinal={`A rentabilidade do projeto é de ${calcularRentabilidade(selectedContract)}%. Este valor reflete a diferença entre os custos totais dos consultores e o valor do contrato. Quanto maior a rentabilidade, maior o lucro gerado em relação ao custo, indicando uma gestão eficiente dos recursos.`}
        />
        <GraficoDesvioEscopo
          nome="Desvio de SLA"
          subtitle="Setembro - 2024"
          valor={calcularDesvioSLA(demandas, contratos.indexOf(selectedContract))}
          labelFinal={`${calcularDesvioSLA(demandas, contratos.indexOf(selectedContract))}% dos chamados ultrapassaram o prazo do SLA devido à alta complexidade e falta de recursos.`}
        />
      </div>

      <GraficoPrevisaoDemanda />

      {/* Modal */}
      <ModalContract show={showModal} onClose={() => setShowModal(false)} selectedContract={selectedContract} />
    </div>
  );
}
