/*
    Faça um programa que receba a média de um aluno.

    caso seja < 5, reprovado
    caso seja >= 5 e < 7, recuperação
    caso seja >= 7, aprovado

    Entrada:
        5.5
    Saída:
        Reprovado
*/

const { gets } = require("./funcoes-auxiliares");

if (gets() < 5){
    console.log('Reprovado');
} else if(gets() >= 5 && gets() < 7){
    console.log('Recuperação');
} else{
    console.log('Aprovado');
}