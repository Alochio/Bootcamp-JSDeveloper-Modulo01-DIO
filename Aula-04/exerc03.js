// Calculando valor do produto a partir do método de pagamento

function calcDesconto(valorProduto, desconto) {
  valorFinal = valorProduto - valorProduto * desconto;
}

function calcJuros(valorProduto, desconto) {
  valorFinal = valorProduto + valorProduto * desconto;
}

function calcValorFinal(valorProduto, metodoPagamento) {
  if (metodoPagamento === `debito`) {
    calcDesconto(valorProduto, 0.1);
  } else if (metodoPagamento === `pix`) {
    calcDesconto(valorProduto, 0.15);
  } else if (metodoPagamento === `dinheiro`) {
    calcDesconto(valorProduto, 0.15);
  } else if (metodoPagamento === `ateDuasVezes`) {
    valorFinal = valorProduto;
  } else if (metodoPagamento === `maisDuasVezes`) {
    calcJuros(valorProduto, 0.1);
  }

  return valorFinal;
}

function main() {
  let valorProduto = 100;
  let metodoPagamento = `maisDuasVezes`;
  let valorFinal;

  console.log("Valor: " + calcValorFinal(valorProduto, `pix`));
}

main();
