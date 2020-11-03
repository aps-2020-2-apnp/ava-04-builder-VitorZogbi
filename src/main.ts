import { Alimento, AlimentoBuilder } from './Alimento'

const cereal = new Alimento('Marmita', 400, 343.3, 52.1, 9.6, 25.3, 0.145, 0.3, 0, 5.5)

console.log(cereal);
console.log(`${cereal}`) // toString

// builder
const alimento = new AlimentoBuilder()
const marmita = alimento.descricao('Marmitao').porcao(600).valorEnergetico(450).
  carboidratos(70).proteinas(60).gordurasTotais(20.5).gorduraSaturadas(10.2).
  gordurasTrans(0).fibras(14.5).sodio(160.0).get()

console.log(marmita);
console.log(`${marmita}`);

const marmita2 = alimento.reset();
console.log(marmita2);




