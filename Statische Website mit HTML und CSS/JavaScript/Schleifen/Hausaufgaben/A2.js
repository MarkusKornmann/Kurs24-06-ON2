function ziffernsumme(zahl) {
  let summe = 0;
  console.log("Berechnung der Ziffernsumme für:", zahl);
  do {
    const letzteZiffer = zahl % 10;
    summe += letzteZiffer;
    console.log(`  + ${letzteZiffer}`);
    zahl = Math.floor(zahl / 10);
  } while (zahl > 0);
  console.log("");
  console.log(`Die Ziffernsumme von ${zahl} ist: ${summe}`);
  return summe;
}

ziffernsumme(248);