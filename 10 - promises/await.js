const { error } = require("console");
const fs = require("fs");

async function buscaArquivo() {
  try {
    const arquivo = await fs.promises.readFile("arquivo.csv");
    const textoDoArquivo = arquivo.toString("utf-8");
    linhasSemCabecalho = textoDoArquivo.split("\n").slice(1);
    linhasSemCabecalho.map((linha) => {
      const [nome, idade, cidade] = linha.split(";");
      return {
        nome,
        idade: idade >= 18 === true,
        cidade,
      };
    });
    console.log(linhasSemCabecalho);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finalizou!");
  }
}

buscaArquivo();