import { Builder } from "./Builder"
import { Alimento } from "./Alimento"

export class AlimentoBuilder implements Builder {

  private _alimento: Alimento

  constructor() {
    this._alimento = new Alimento('Marmita', 400, 343.3, 52.1, 9.6, 25.3, 0.145, 0.3, 0, 5.5)
  }

  reset(): AlimentoBuilder {
    this._alimento = new Alimento('Marmita', 400, 343.3, 52.1, 9.6, 25.3, 0.145, 0.3, 0, 5.5)
    return this
  }

  descricao(descricao: string): AlimentoBuilder {
    this._alimento.descricao = descricao
    return this
  }

  porcao(porcao: number): AlimentoBuilder {
    this._alimento.porcao = porcao
    return this
  }

  valorEnergetico(valorEnergetico: number): AlimentoBuilder {
    this._alimento.valorEnergetico = valorEnergetico
    return this
  }

  carboidratos(carboidratos: number): AlimentoBuilder {
    this._alimento.carboidratos = carboidratos
    return this
  }


  fibras(fibras: number): AlimentoBuilder {
    this._alimento.fibras = fibras
    return this
  }

  proteinas(proteinas: number): AlimentoBuilder {
    this._alimento.proteinas = proteinas
    return this
  }

  sodio(sodio: number): AlimentoBuilder {
    this._alimento.sodio = sodio
    return this
  }

  gorduraSaturadas(gordurasSaturadas: number): AlimentoBuilder {
    this._alimento.gordurasSaturadas = gordurasSaturadas
    return this
  }

  gordurasTrans(gordurasTrans: number): AlimentoBuilder {
    this._alimento.gordurasTrans = gordurasTrans
    return this
  }

  gordurasTotais(gordurasTotais: number): AlimentoBuilder {
    this._alimento.gordurasTotais = gordurasTotais
    return this
  }

  get(): Alimento {
    return this._alimento
  }

}
