let precoGasolina = 5.3;
let precoAlcool = 4.25;
let tipoCombustivel = `gasolina`;
let kmPorLitro = 10;
let distranciaViagem = 152;

let custoViagem;

if (tipoCombustivel === `gasolina`) {
  custoViagem = (distranciaViagem / kmPorLitro) * precoGasolina;
  console.log(
    "O custo da viagem com gasolina será: " + custoViagem.toFixed(2) + " reais"
  );
} else if (tipoCombustivel === `alcool`) {
  custoViagem = (distranciaViagem / kmPorLitro) * precoAlcool;
  console.log(
    "O custo da viagem com alcool será: " + custoViagem.toFixed(2) + " reais"
  );
} else {
  console.log("Tipo de combustível não corresponde!");
}
