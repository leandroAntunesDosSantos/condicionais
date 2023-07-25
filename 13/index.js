//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
  const valorNoCredito = valorDoProduto - valorDoProduto * (5 / 100);
  const valorNoCreditoConvertido = valorNoCredito / 100;
  console.log(`Valor a ser pago: R$ ${valorNoCreditoConvertido.toFixed(2)}`);
}

if (tipoDePagamento === "cheque") {
  const valorNoCheque = valorDoProduto - valorDoProduto * (3 / 100);
  const valorNoChequeConvertido = valorNoCheque / 100;
  console.log(`Valor a ser pago: R$ ${valorNoChequeConvertido.toFixed(2)}`);
}

if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
  const valorNoDebitoOuDinheiro = valorDoProduto - valorDoProduto * (10 / 100);
  const valorNoDebitoOuDinheiroConvertido = valorNoDebitoOuDinheiro / 100;
  console.log(
    `Valor a ser pago: R$ ${valorNoDebitoOuDinheiroConvertido.toFixed(2)}`
  );
}
