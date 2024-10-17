// 3. Filterung und Extra
zahlenArray = Array.from({length: 25}, () => Math.floor(Math.random() * 100) + 1);

gerade = zahlenArray.filter(zahl => zahl % 2 === 0);

summe = gerade.reduce((summe, zahl) => summe + zahl, 0);


console.log("Zufällige Zahlen:", zahlenArray);
console.log("")
console.log("Gerade Zahlen:", gerade);
console.log("")
console.log("Summe der geraden Zahlen:", summe);
console.log("")
