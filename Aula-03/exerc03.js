// Calculando valor do produto a partir do método de pagamento

let valorProduto = 100;
let metodoPagamento = `maisDuasVezes`;
let valorFinal;

if (metodoPagamento === `debito`) {
  valorFinal = valorProduto - valorProduto * 0.1;
} else if (metodoPagamento === `pix`) {
  valorFinal = valorProduto - valorProduto * 0.15;
} else if (metodoPagamento === `dinheiro`) {
  valorFinal = valorProduto - valorProduto * 0.15;
} else if (metodoPagamento === `ateDuasVezes`) {
  valorFinal = valorProduto;
} else if (metodoPagamento === `maisDuasVezes`) {
  valorFinal = valorProduto + (valorProduto * 0.1);
}

console.log("Valor: " + valorFinal);
