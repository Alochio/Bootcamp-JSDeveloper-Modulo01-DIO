//FILTER => Filtra os elementos de uma lista

const list = [777,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,100];

const listaDeNumPares = list.filter((element) => {
    return (element % 2 === 0); //boolean que só vai inserir na lista nova se for true
})

console.log(listaDeNumPares);