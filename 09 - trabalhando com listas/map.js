//MAP => Modifica o formato da lista (objeto/html/...)

class Pessoa {
  constructor(name) {
    this.name = name;
  }
}
const lista = [
  new Pessoa("Vinicius"),
  new Pessoa("jose"),
  new Pessoa("Antonio"),
];


console.log(lista);

/* Mesma coisa que a arrow function abaixo
let listaConvertida = lista.map(function(element){
    return element.name;
});
*/

let listaConvertida = lista.map((element) => element.name);

let listaEmHtml = lista.map(function (element) {
  return `
        <li>${element.name}</li>
    `;
});

console.log(listaConvertida);
console.log(listaEmHtml);