//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let valorPagoConvertido = valorPago * 100; //centavos

let parcelasPagas = valorPago / 100; //unidade

let parcelasQueFaltam = quantidadeDoParcelamento - parcelasPagas;

let valorQueFaltaPagar = (valorDoProduto - valorPagoConvertido) / 100;

let precoDaParcela = valorQueFaltaPagar / parcelasQueFaltam;
console.log(`Restam ${parcelasQueFaltam} parcelas de R$${precoDaParcela}`);
