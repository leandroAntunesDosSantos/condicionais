//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

let rendaMinima = 2000_00;

let valorTotalCurso = 18000_00;

let TotalQueFaltaPagar = valorTotalCurso - totalJaPagoPeloAluno;
// if (mesesDecorridos > 60) {
//   console.log("Prazo expirado, nao precisa mais pagar.");
// } else if (
//   totalJaPagoPeloAluno < valorTotalCurso &&
//   rendaMensalEmCentavos > rendaMinima
// ) {
//   const valoApagar = rendaMensalEmCentavos * 0.18;
//   console.log(`O valor da parcela é de R$ ${valoApagar / 100} reais`);
// }

if (mesesDecorridos > 60) {
  console.log("Prazo expirado, nao precisa mais pagar.");
} else if (rendaMensalEmCentavos < rendaMinima) {
  console.log("Nao precisa pagar pois valor inferior a R$ 2000 reais");
} else if (TotalQueFaltaPagar > 0) {
  const valoApagar = rendaMensalEmCentavos * 0.18;
  console.log(`O valor da parcela é de R$ ${valoApagar / 100} reais`);
} else {
  console.log("Valor de R$ 18.000,00 ja foi quitado.");
}
