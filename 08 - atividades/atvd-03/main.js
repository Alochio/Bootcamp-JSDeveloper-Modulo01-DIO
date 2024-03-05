/*
    Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
    Para realizar o cálculo receba o valor bruto do salário e o adicional dos benefícios
    O salário a ser transferido é calculado da seguinte maneira:

        valor do salário bruto - percentual do imposto mediante a faixa salarial + adicional dos benefícios
    
    Para calcular o imposto segue as aliquotas:
        De R$ 0,00 a R$ 1.100,00 = 5,0%
        De R$ 1.100,01 a R$ 2.500,00 = 10,0%
        Maior que R$ 2.500,00 = 15,0%

    Exemplo:
        Entrada:
            2000
            250
        Saída:
            2050.00
*/

const { getsSalario, getsBonus, print } = require("./funcoes-auxiliares");

let valorSalario = getsSalario();
let valorBonus = getsBonus();
let salarioAhReceber;

if(valorSalario <= 1100){
    salarioAhReceber = (valorSalario - (valorSalario * 0.05)) + valorBonus;
} else if (valorSalario >= 1100.01 && valorSalario <= 2500){
    salarioAhReceber = (valorSalario - (valorSalario * 0.10)) + valorBonus;
}else if(valorSalario > 2500){
    salarioAhReceber = (valorSalario - (valorSalario * 0.15)) + valorBonus;
}

print(salarioAhReceber.toFixed(2));

