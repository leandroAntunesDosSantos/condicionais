const diaDaSemana = 3;

if (diaDaSemana >= 1 && diaDaSemana <= 7) {
  if (diaDaSemana === 1) {
    console.log("Segunda-feira");
  }
  if (diaDaSemana === 2) {
    console.log("Terça-feira");
  }
  if (diaDaSemana === 3) {
    console.log("Quarta-feira");
  }
  if (diaDaSemana === 4) {
    console.log("Quinta-feira");
  }
  if (diaDaSemana === 5) {
    console.log("Sexta-feira");
  }
  if (diaDaSemana === 6) {
    console.log("Sábado");
  }
  if (diaDaSemana === 7) {
    console.log("Domingo");
  }
} else {
  console.log("O dia da semana informado não é válido.");
}
