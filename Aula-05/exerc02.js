/*
    Crie uma classe para representar pessoas.
    Para cada pessoa temos os atributos, nome, peso e altura.
    As pessoas devem ter capacidade de dizer o valor do seu IMC;
    Instancie uma pessoa chamada José que tenha 70Kg de peso 1.75 de altura e peça José para dizer o seu IMC.
*/

function estadoPessoa(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso!';
  } else if (imc >= 18.5 && imc < 25) {
    return 'Peso normal!';
  } else if (imc >= 25 && imc < 30) {
    return 'Acima do peso!';
  } else if (imc >= 30 && imc < 40) {
    return 'Obeso!';
  } else if (imc >= 40) {
    return 'Obesidade grave!';
  } else {
    return 'Valor inválido!';
  }
}

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }
}

const jose = new Pessoa("José", 70, 1.75);

const imc = jose.calcularIMC();
const estado = estadoPessoa(imc);

console.log('O IMC de ' + jose.nome + 'é: ' + imc.toFixed(2) + ' seu estado é: ' + estado);


