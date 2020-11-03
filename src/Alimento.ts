export class Alimento {

  descricao: string
  porcao: number // gramas
  valorEnergetico: number // Kcal
  carboidratos: number // gramas
  fibras: number // gramas
  proteinas: number // gramas
  sodio: number // gramas
  gordurasSaturadas: number // gramas
  gordurasTrans: number // gramas
  gordurasTotais: number // gramas

  constructor(descricao: string, porcao: number, valorEnergetico: number, carboidratos: number, fibras: number, proteinas: number, sodio: number, gordurasSaturadas: number, gordurasTrans: number, gordurasTotais: number) {
    this.descricao = descricao
    this.porcao = porcao
    this.valorEnergetico = valorEnergetico
    this.carboidratos = carboidratos
    this.fibras = fibras
    this.proteinas = proteinas
    this.sodio = sodio
    this.gordurasSaturadas = gordurasSaturadas
    this.gordurasTrans = gordurasTrans
    this.gordurasTotais = gordurasTotais
  }

  toString() {
    return `Cada porção de ${this.porcao}g de ${this.descricao} contém:\n` +
      `Valor Energético: ${this.valorEnergetico} Kcal\n` +
      `Carboidratos: ${this.carboidratos} g\n` +
      `Fibras: ${this.fibras} g\n` +
      `Proteínas: ${this.proteinas} g\n` +
      `Sódio: ${this.sodio} g\n` +
      `Gorduras Saturadas: ${this.gordurasSaturadas} g\n` +
      `Gorduras Trans: ${this.gordurasTrans} g\n` +
      `Gorduras Totais: ${this.gordurasTotais} g`
  }

}

// tslint:disable-next-line: max-classes-per-file
export class AlimentoBuilder {

  private _alimento: Alimento

  constructor(){
    this._alimento = new Alimento('Marmita', 400, 343.3, 52.1, 9.6, 25.3, 0.145, 0.3, 0, 5.5)
  }

  reset(): AlimentoBuilder {
    this._alimento = new Alimento('Marmita', 400, 343.3, 52.1, 9.6, 25.3, 0.145, 0.3, 0, 5.5)
    return this
  }

  descricao(descricao: string): AlimentoBuilder{
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


  fibras(fibras: number): AlimentoBuilder{
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

  gordurasTrans(gordurasTrans: number): AlimentoBuilder{
    this._alimento.gordurasTrans = gordurasTrans
    return this
  }

  gordurasTotais(gordurasTotais: number): AlimentoBuilder{
    this._alimento.gordurasTotais = gordurasTotais
    return this
  }

  get(): Alimento{
    return this._alimento
  }

}
