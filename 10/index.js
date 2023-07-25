const caractere = "E";

const caractereMaiusculo = caractere.toUpperCase();

const caractereMinusculo = caractere.toLowerCase();

if (isNaN(caractere)) {
  if (caractereMaiusculo === caractere) {
    if (
      caractereMaiusculo === "A" ||
      caractereMaiusculo === "B" ||
      caractereMaiusculo === "C" ||
      caractereMaiusculo === "D" ||
      caractereMaiusculo === "E"
    ) {
      console.log("Vogais Maiúsculas");
    } else {
      console.log("Consoantes Maiúsculas");
    }
  } else if (caractereMinusculo === caractere) {
    if (
      caractereMinusculo === "a" ||
      caractereMinusculo === "e" ||
      caractereMinusculo === "i" ||
      caractereMinusculo === "o" ||
      caractereMinusculo === "u"
    ) {
      console.log("Vogais minúsculas");
    } else {
      console.log("Consoantes minúsculas");
    }
  }
} else {
  console.log("É um número");
}
