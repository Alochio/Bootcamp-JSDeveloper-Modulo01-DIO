const { error } = require("console");
const fs = require("fs");

const promessaDaLeituraArquivo = fs.promises.readFile("arquivo.csv");

promessaDaLeituraArquivo
  .then((arquivo) => arquivo.toString('utf-8'))
  .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
  .then((linhasSemCabecalho) =>
    linhasSemCabecalho.map((linha) => {
      const [nome, idade, cidade] = linha.split(";");
      return {
        nome,
        idade: idade >= 18 === true,
        cidade,
      };
    })
  )
  .then((listaDeEntrada) => console.log(listaDeEntrada))
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promessa realizada!");
  });
