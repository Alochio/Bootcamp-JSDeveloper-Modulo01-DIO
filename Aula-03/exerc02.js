// Calcular o IMC

let peso = 118;
let altura = 1.94;

let imc = peso / (altura * altura);
console.log(imc);

if (imc < 18.5) {
  console.log("Abaixo do peso!");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal!");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do peso!");
} else if (imc >= 30 && imc < 40) {
  console.log("Obeso!");
} else if (imc >= 40) {
  console.log("Obesidade grave!");
} else {
  console.log("Valor inválido!");
}
