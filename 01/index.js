const jogada1 = "pedra";
const jogada2 = "tesoura";

//seu código aqui

if (jogada1 === "pedra" && jogada2 === "tesoura") {
  console.log(`${jogada1} vencedor(a)! `);
}
if (jogada1 === "pedra" && jogada2 === "papel") {
  console.log(`${jogada2} vencedor(a)! `);
}
if (jogada1 === "pedra" && jogada2 === "pedra") {
  console.log(` Empate! `);
}

if (jogada1 === "papel" && jogada2 === "tesoura") {
  console.log(`${jogada2} vencedor(a)! `);
}
if (jogada1 === "papel" && jogada2 === "papel") {
  console.log(` Empate! `);
}
if (jogada1 === "papel" && jogada2 === "pedra") {
  console.log(`${jogada1} vencedor(a)! `);
}

if (jogada1 === "tesoura" && jogada2 === "tesoura") {
  console.log(` Empate! `);
}
if (jogada1 === "tesoura" && jogada2 === "papel") {
  console.log(`${jogada1} vencedor(a)! `);
}
if (jogada1 === "tesoura" && jogada2 === "pedra") {
  console.log(`${jogada2} vencedor(a)! `);
}
