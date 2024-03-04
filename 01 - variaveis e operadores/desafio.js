let preco_combust = 5.35;
let gasto_medio = 4;
let distanc = 125;

let valor_gasto = (distanc/gasto_medio)*preco_combust;

console.log(
  "O preço da viagem é: " + valor_gasto.toFixed(2) + " reais"
);
