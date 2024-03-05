/*
    Faça um programa que receba N (quantidade de numeros) e seus respectivos valores
    Imprima o maior número par e o menor nú9mero impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            5
        Saída:
            Maior número par é: 10
            Menor número impar é: 1
*/

const { gets } = require("./funcoes-auxiliares");

let n = gets();
let maiorPar = 0;
let menorImpar = 0;

for(let i = 1; i <= n; i++){
    let numeroAtual = gets();

    if(!(numeroAtual%2)){
        if(maiorPar < numeroAtual){
            maiorPar = numeroAtual;
        }
    }else{
        if(menorImpar === 0){
            menorImpar = numeroAtual;
        } else if(menorImpar > numeroAtual){
            menorImpar = numeroAtual;
        }
    }
}

console.log('O maior número par é: ' + maiorPar);
console.log('O menor número impar é: ' + menorImpar);