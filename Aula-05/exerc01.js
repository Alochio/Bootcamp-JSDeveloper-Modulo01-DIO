/*
    Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
    Crie um método que dado a quantidade de Km e o preço do combustível nos de o valor gasto em reais
    para realizar esse percurso.
*/

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  gastoCombustivel(valorGasolina, tamPercurso) {
    return tamPercurso * this.gastoMedioPorKm * valorGasolina;
  }
}

const celta = new Carro(`Chevrolet`, `preto`, 1 / 12);
const civic = new Carro(`Honda`, `prata`, 1 / 8);

console.log(celta.gastoCombustivel(5, 100).toFixed(2));
console.log(civic.gastoCombustivel(5, 100).toFixed(2));




