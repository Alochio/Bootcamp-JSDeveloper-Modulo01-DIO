const salarioBruto = [2000, 250];

const salario = salarioBruto[0];
const bonus = salarioBruto[1];

function getsSalario() {
  return salario;
}

function getsBonus(){
    return bonus;
}

function print(texto) {
  console.log(texto);
}

module.exports = { getsSalario, getsBonus, print };
