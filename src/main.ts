import { Director } from './Director'
import { AlimentoBuilder } from './AlimentoBuilder'

// builder
const alimento = new AlimentoBuilder()
const marmita = alimento.descricao('Marmitao').porcao(600).valorEnergetico(450).
  carboidratos(70).proteinas(60).gordurasTotais(20.5).gorduraSaturadas(10.2).
  gordurasTrans(0).fibras(14.5).sodio(160.0).get()

console.log(marmita);
console.log(`${marmita}`);

const marmita2 = alimento.reset().get();
console.log(marmita2);

// Director

const alimentoBuilder = new AlimentoBuilder()

const director = new Director(alimentoBuilder)

director.fazerMarmita()
const alimento1 = alimentoBuilder.get()
console.log(alimento1);
console.log(`${alimento1}`);

director.fazerMarmitao()
const alimento2 = alimentoBuilder.get()
console.log(alimento2);
console.log(`${alimento2}`);





