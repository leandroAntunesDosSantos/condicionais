const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui

const rendimentosIsentosTributaveis = 28559 * 100 + 70;

if (aposentada || portadoraDeDoenca) {
  console.log("ISENTA");
} else if (totalDeRendimentos <= rendimentosIsentosTributaveis) {
  console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else {
  console.log("PEGA LEAO");
}
