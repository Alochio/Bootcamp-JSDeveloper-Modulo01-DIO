class Pessoa {
  constructor(name) {
    this.name = name;
  }
}
const lista = [
  new Pessoa("Vinicius"),
  new Pessoa("jose"),
  new Pessoa("Antonio"),
  new Pessoa("Augusto"),
  new Pessoa("Joaquin"),
];

const objetoConstruido = lista
  .map((e) => e.name)
  .filter((e) => e.startsWith('A'))
  .join("/");

console.log(objetoConstruido);