import { Builder } from "./Builder"

export class Director {

  private builder: Builder

  constructor(alimentoBuilder: Builder){
    this.builder = alimentoBuilder
    this.builder.reset()
  }

  fazerMarmita() {
    this.builder.descricao('Marmita').porcao(400).
      valorEnergetico(343.3).carboidratos(52.1).proteinas(9.6).
      gordurasTotais(25.3).gorduraSaturadas(12.3).gordurasTrans(0).fibras(5.5).
      sodio(0.145)
  }

  fazerMarmitao() {
    this.builder.descricao('Marmitao').porcao(600).valorEnergetico(450).
      carboidratos(70).proteinas(60).gordurasTotais(20.5).gorduraSaturadas(10.2).
      gordurasTrans(0).fibras(10.5).sodio(160.0)
  }
}
