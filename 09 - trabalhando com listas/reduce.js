//REDUCE => transforma uma lista em um único elemento

const list = [1,2,3,4,5,6,7,8,9,10];

const somaDaLista = list.reduce((previius, current) => {
    return (previius + current)
},0) //o número aqui no final define de qual número irá começar, não é preciso mas ajuda a previnir erros.

console.log(somaDaLista);