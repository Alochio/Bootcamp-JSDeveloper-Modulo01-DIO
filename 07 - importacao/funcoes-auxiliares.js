const numerosSorteados = [5, 5, 50, 10, 98, 23];
let i = 0;

function gets() {
  const valor = numerosSorteados[i];
  i = i + 1;
  return valor;
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print };
