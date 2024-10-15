function summeGeraderZahlen() {
  let summe = 0;
  let zahl = 1;

  do {
    if (zahl % 2 == 0) {
      summe += zahl;
      console.log(`${zahl} ist gerade und wird zur Summe addiert.`);
    }
    zahl++;
  } while (zahl <= 100);

  console.log("Die Summe aller geraden Zahlen ist:", summe);
  return summe;
}

summeGeraderZahlen();