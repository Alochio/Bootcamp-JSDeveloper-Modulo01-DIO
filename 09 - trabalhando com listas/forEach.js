//FOREACH => basicamente um for com o tamanho total da lista

const list = [777,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,100];


list.forEach((element, i, listReference) =>{
    console.log(element);
})

//element => elementos da lista
//i => posição que está percorrendo
//listReference => lista de referencia, toda a lista do primeiro núemro ao último