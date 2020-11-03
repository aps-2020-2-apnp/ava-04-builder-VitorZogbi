import { Alimento, AlimentoBuilder } from './Alimento'

const cereal = new Alimento('Marmita', 400, 343.3, 52.1, 9.6, 25.3, 0.145, 0.3, 0, 5.5)

console.log(cereal);
console.log(`${cereal}`) // toString

// builder
const alimento = new AlimentoBuilder()
const marmita = alimento.descricao('Marmitao').porcao(600).valorEnergetico(500).
  carboidratos(100).proteinas(50).gordurasTotais(40.5).gorduraSaturadas(20.2).
  gordurasTrans(0).fibras(5.5).sodio(1.4).get()

console.log(marmita);
console.log(`${marmita}`);



