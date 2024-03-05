/*
    Uma sala contém 5 alunos - Para cada aluno foi sorteado um número de 1 a 100.
    Faça um programa que recebe os 5 números sorteados para os alunos, e mostre o  maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Dados de saída:
    98
*/

const { gets, print } = require("./funcoes-auxiliares.js");

const quantidadeDeAlunos = gets(); //Primeiro número da lista representa a quantidade de alunos
var maiorNum = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
  const numeroSorteado = gets();
  if (maiorNum < numeroSorteado) {
    maiorNum = numeroSorteado;
  }
}

console.log(maiorNum);
