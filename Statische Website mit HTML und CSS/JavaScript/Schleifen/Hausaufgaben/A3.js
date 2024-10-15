const zahlenArray = [10, 23, 35, 47, 52, 66, 71, 88, 90];
const schwellenwert = 50;

// for-Schleife
function zaehleElementeFor(array, schwelle) {
  let zaehler = 0;
  console.log("Schwellenwert ist 50, Zählung mit for-Schleife:");
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1}: ${array[i]}`);
    if (array[i] > schwelle) {
      zaehler++;
      console.log(`${array[i]} ist größer als der Schwellenwert.`);
    }
  }
  console.log("");
  console.log("");
  console.log("");
  return zaehler;
}
zaehleElementeFor(zahlenArray, schwellenwert);

// while-Schleife
function zaehleElementeWhile(array, schwelle) {
  let zaehler = 0;
  let i = 0;
  console.log("Schwellenwert ist 50, Zählung mit while-Schleife:");
  while (i < array.length) {
    console.log(`${i + 1}: ${array[i]}`);
    if (array[i] > schwelle) {
      zaehler++;
      console.log(`${array[i]} ist größer als der Schwellenwert.`);
    }
    i++;
  }
  console.log("");
  console.log("");
  console.log("");
  return zaehler;
}
zaehleElementeWhile(zahlenArray, schwellenwert);

// do...while-Schleife
function zaehleElementeDoWhile(array, schwelle) {
  let zaehler = 0;
  let i = 0;
  console.log("Schwellenwert ist 50, Zählung mit do-while-Schleife:");
  do {
    console.log(`${i + 1}: ${array[i]}`);
    if (array[i] > schwelle) {
      zaehler++;
      console.log(`${array[i]} ist größer als der Schwellenwert. `);
    }
    i++;
  } while (i < array.length);
  console.log("");
  console.log("");
  console.log("");
  return zaehler;
}
zaehleElementeDoWhile(zahlenArray, schwellenwert);

