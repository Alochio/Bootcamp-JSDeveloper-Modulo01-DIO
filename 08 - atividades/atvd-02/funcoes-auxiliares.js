const numeros = [6, 5, 3, 4, 1, 10, 5];

let i = 0;

function gets() {
  const valor = numeros[i];
  i = i + 1;
  return valor;
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print };